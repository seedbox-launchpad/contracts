pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import "../interfaces/ILinearPool.sol";

contract Governor is
    Initializable,
    OwnableUpgradeable,
    ReentrancyGuardUpgradeable
{
    uint256 public proposalCount;
    uint256 public delayPeriod;
    uint256 public votingPeriod;
    address public stakingPool;

    mapping(uint256 => Proposal) public proposals;
    mapping(address => uint256) public proposalCountsByUsers;
    mapping(address => uint256[]) public proposalsByUsers;
    mapping(uint256 => mapping(address => Voting)) public votingDetails;
    mapping(uint256 => string) public adminCanceledProposals;
    mapping(address => uint256) public lastProposalCreateTime;
    mapping(address => bool) public banList;

    struct Proposal {
        uint256 id;
        address proposer;
        uint256 startTime;
        uint256 endTime;
        uint256 forVotes;
        uint256 againstVotes;
        string name;
        string description;
        bytes hashData;
        bool canceled;
        bool executed;
    }

    struct Voting {
        bool hasVoted;
        bool support;
        uint256 weight;
    }

    struct AdminCanceledProposal {
        uint256 proposalId;
        string cancelingReason;
    }

    struct BannedUserStruct {
        address user;
        string reason;
        bool isBanned;
    }

    event ProposalAdded(
        uint256 proposalId,
        address proposer,
        uint256 startTime,
        uint256 endTime,
        string name,
        string description,
        bytes hashData
    );
    event Voted(address user, uint256 proposalId, uint256 weight, bool support);
    event ProposalCanceledByAdmin(uint256 proposalId, string reason);
    event UserBanned(address user, string reason, bool isBanned);

    function initialize(
        address _stakingPool,
        uint256 _delayPeriod,
        uint256 _votingPeriod
    ) public initializer {
        __Ownable_init();
        __ReentrancyGuard_init();
        stakingPool = _stakingPool;
        delayPeriod = _delayPeriod;
        votingPeriod = _votingPeriod;
    }

    function addProposal(
        string memory _name,
        string memory _description,
        bytes calldata _hashData
    ) external nonReentrant {
        require(
            ILinearPool(stakingPool).commonBalanceOf(msg.sender) > 0 ||
                msg.sender == owner(),
            "Governor: Add proposals is available for SBX stakers only"
        );
        require(
            lastProposalCreateTime[msg.sender] + delayPeriod + votingPeriod <
                block.timestamp ||
                msg.sender == owner(),
            "Governor: You have added proposal recently"
        );
        require(
            !banList[msg.sender],
            "Governor: You have been banned from adding proposals"
        );
        require(
            bytes(_name).length != bytes("").length,
            "Governor: Name cannot be empty"
        );
        require(
            bytes(_description).length != bytes("").length,
            "Governor: Description cannot be empty"
        );

        proposalCount += 1;
        proposals[proposalCount].id = proposalCount;
        proposals[proposalCount].proposer = msg.sender;
        proposals[proposalCount].startTime = block.timestamp + delayPeriod;
        proposals[proposalCount].endTime =
            block.timestamp +
            delayPeriod +
            votingPeriod;
        proposals[proposalCount].name = _name;
        proposals[proposalCount].description = _description;
        proposals[proposalCount].hashData = _hashData;

        lastProposalCreateTime[msg.sender] = block.timestamp;

        proposalCountsByUsers[msg.sender] += 1;
        proposalsByUsers[msg.sender].push(proposalCount);

        emit ProposalAdded(
            proposalCount,
            msg.sender,
            block.timestamp + delayPeriod,
            block.timestamp + delayPeriod + votingPeriod,
            _name,
            _description,
            _hashData
        );
    }

    function adminProposalCancel(bytes calldata data) external onlyOwner {
        AdminCanceledProposal[] memory canceledProposals = abi.decode(
            data,
            (AdminCanceledProposal[])
        );
        uint256 arrLength = canceledProposals.length;
        require(arrLength > 0, "Empty array");
        for (uint256 i = 0; i < arrLength; i++) {
            uint256 id = canceledProposals[i].proposalId;
            adminCanceledProposals[id] = canceledProposals[i].cancelingReason;
            proposals[id].canceled = true;
            emit ProposalCanceledByAdmin(
                id,
                canceledProposals[i].cancelingReason
            );
        }
    }

    function ban(bytes calldata data) external onlyOwner {
        BannedUserStruct[] memory bannedUser = abi.decode(
            data,
            (BannedUserStruct[])
        );
        uint256 arrLength = bannedUser.length;
        require(arrLength > 0, "Empty array");
        for (uint256 i = 0; i < arrLength; i++) {
            banList[bannedUser[i].user] = bannedUser[i].isBanned;
            emit UserBanned(
                bannedUser[i].user,
                bannedUser[i].reason,
                bannedUser[i].isBanned
            );
        }
    }

    function markAsExecuted(bytes calldata data) external onlyOwner {
        uint256[] memory executedProposals = abi.decode(data, (uint256[]));
        uint256 arrLength = executedProposals.length;
        require(arrLength > 0, "Empty array");
        for (uint256 i = 0; i < arrLength; i++) {
            uint256 id = executedProposals[i];
            require(
                proposals[id].endTime < block.timestamp,
                "Governor: Voting has not finished yet"
            );
            proposals[id].executed = true;
        }
    }

    function vote(uint256 proposalId, bool support) external nonReentrant {
        require(
            ILinearPool(stakingPool).commonBalanceOf(msg.sender) > 0,
            "Governor: Voting is available for SBX stakers only"
        );
        require(
            !banList[msg.sender],
            "Governor: You have been banned from voting"
        );
        require(
            !votingDetails[proposalId][msg.sender].hasVoted,
            "Governor: You have already voted for this proposal"
        );
        require(
            proposals[proposalId].startTime < block.timestamp,
            "Governor: Voting for this proposal has not been started yet"
        );
        require(
            proposals[proposalId].endTime > block.timestamp,
            "Governor: Voting for this proposal is close"
        );

        uint256 share = weight(msg.sender);

        votingDetails[proposalId][msg.sender].hasVoted = true;
        votingDetails[proposalId][msg.sender].support = support;
        votingDetails[proposalId][msg.sender].weight = share;

        if (support) {
            proposals[proposalId].forVotes += share;
        } else {
            proposals[proposalId].againstVotes += share;
        }

        emit Voted(msg.sender, proposalId, share, support);
    }

    function weight(address user) public returns (uint256 share) {
        require(
            ILinearPool(stakingPool).commonBalanceOf(msg.sender) > 0,
            "Governor: Voting is available for SBX stakers only"
        );
        require(!banList[user], "Governor: You have been banned");

        uint256 balance = ILinearPool(stakingPool).commonBalanceOf(user);
        uint256 commonAmount = ILinearPool(stakingPool).commonAmount();
        share = (balance * 100000) / commonAmount;
    }

    function canVote(address user)
        external
        view
        returns (bool isBanned, bool isStaker)
    {
        isBanned = banList[user];
        isStaker = ILinearPool(stakingPool).commonBalanceOf(user) > 0;
    }

    function userVoteInfo(address user, uint256 proposalId)
        external
        view
        returns (Voting memory voting)
    {
        voting = votingDetails[proposalId][user];
    }

    function getProposalStatus(uint256 proposalId)
        external
        view
        returns (uint8 status)
    {
        Proposal storage proposal = proposals[proposalId];
        if (proposal.executed) {
            status = 2;
        } else if (
            proposal.canceled ||
            (block.timestamp > proposal.endTime &&
                proposal.againstVotes > proposal.forVotes) ||
            (block.timestamp > proposal.endTime && proposal.forVotes == 0)
        ) {
            status = 3;
        } else if (
            !proposal.canceled &&
            block.timestamp > proposal.endTime &&
            proposal.againstVotes <= proposal.forVotes
        ) {
            status = 4;
        } else if (
            block.timestamp > proposal.startTime &&
            block.timestamp < proposal.endTime
        ) {
            status = 0;
        } else {
            status = 1;
        }
    }
}
