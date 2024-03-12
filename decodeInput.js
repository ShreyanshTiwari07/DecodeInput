const InputDataDecoder = require("ethereum-input-data-decoder");
const { Web3 } = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/a03dbccb611148449aabbb9511985b51"
);
const txHash =
  "0x84cc5735833dd8604c318e17cfa117ae79e398874e2005b9889d8012a73ec495";

const abi = [
  {
    inputs: [
      { internalType: "address", name: "_loanCore", type: "address" },
      { internalType: "address", name: "_feeController", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "caller", type: "address" }],
    name: "OC_ApprovedOwnLoan",
    type: "error",
  },
  { inputs: [], name: "OC_ArrayTooManyElements", type: "error" },
  { inputs: [], name: "OC_BatchLengthMismatch", type: "error" },
  {
    inputs: [{ internalType: "address", name: "caller", type: "address" }],
    name: "OC_CallerNotParticipant",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "interestRate", type: "uint256" },
    ],
    name: "OC_InterestRate",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "collateralAddress", type: "address" },
    ],
    name: "OC_InvalidCollateral",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "payableCurrency", type: "address" },
    ],
    name: "OC_InvalidCurrency",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    name: "OC_InvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum LoanLibrary.LoanState",
        name: "state",
        type: "uint8",
      },
    ],
    name: "OC_InvalidState",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "verifier", type: "address" }],
    name: "OC_InvalidVerifier",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "durationSecs", type: "uint256" },
    ],
    name: "OC_LoanDuration",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "address", name: "lender", type: "address" },
      { internalType: "address", name: "verifier", type: "address" },
      { internalType: "address", name: "collateralAddress", type: "address" },
      { internalType: "uint256", name: "collateralId", type: "uint256" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "OC_PredicateFailed",
    type: "error",
  },
  { inputs: [], name: "OC_PredicatesArrayEmpty", type: "error" },
  {
    inputs: [{ internalType: "uint256", name: "principal", type: "uint256" }],
    name: "OC_PrincipalTooLow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldCollateralAddress",
        type: "address",
      },
      { internalType: "uint256", name: "oldCollateralId", type: "uint256" },
      {
        internalType: "address",
        name: "newCollateralAddress",
        type: "address",
      },
      { internalType: "uint256", name: "newCollateralId", type: "uint256" },
    ],
    name: "OC_RolloverCollateralMismatch",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "oldCurrency", type: "address" },
      { internalType: "address", name: "newCurrency", type: "address" },
    ],
    name: "OC_RolloverCurrencyMismatch",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "caller", type: "address" }],
    name: "OC_SelfApprove",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "signer", type: "address" }],
    name: "OC_SideMismatch",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256", name: "deadline", type: "uint256" }],
    name: "OC_SignatureIsExpired",
    type: "error",
  },
  {
    inputs: [{ internalType: "string", name: "addressType", type: "string" }],
    name: "OC_ZeroAddress",
    type: "error",
  },
  { inputs: [], name: "OC_ZeroArrayElements", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isAllowed", type: "bool" },
    ],
    name: "SetAllowedCollateral",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isAllowed", type: "bool" },
      {
        indexed: false,
        internalType: "uint256",
        name: "minPrincipal",
        type: "uint256",
      },
    ],
    name: "SetAllowedCurrency",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "verifier",
        type: "address",
      },
      { indexed: false, internalType: "bool", name: "isAllowed", type: "bool" },
    ],
    name: "SetAllowedVerifier",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BASIS_POINTS_DENOMINATOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_01",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_02",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_03",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_04",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_05",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_06",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_07",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FL_08",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INTEREST_RATE_DENOMINATOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WHITELIST_MANAGER_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_PREDICATE_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "address", name: "verifier", type: "address" },
        ],
        internalType: "struct LoanLibrary.Predicate[]",
        name: "predicates",
        type: "tuple[]",
      },
    ],
    name: "_encodePredicates",
    outputs: [{ internalType: "bytes32", name: "itemsHash", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allowedCollateral",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allowedCurrencies",
    outputs: [
      { internalType: "bool", name: "isAllowed", type: "bool" },
      { internalType: "uint256", name: "minPrincipal", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "allowedVerifiers",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "signer", type: "address" },
      { internalType: "bool", name: "approved", type: "bool" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "principal", type: "uint256" },
      {
        internalType: "uint256",
        name: "proratedInterestRate",
        type: "uint256",
      },
    ],
    name: "getInterestAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
    ],
    name: "initializeLoan",
    outputs: [{ internalType: "uint256", name: "loanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "collateralSig",
        type: "tuple",
      },
      { internalType: "uint256", name: "permitDeadline", type: "uint256" },
    ],
    name: "initializeLoanWithCollateralPermit",
    outputs: [{ internalType: "uint256", name: "loanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "collateralSig",
        type: "tuple",
      },
      { internalType: "uint256", name: "permitDeadline", type: "uint256" },
      {
        components: [
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "address", name: "verifier", type: "address" },
        ],
        internalType: "struct LoanLibrary.Predicate[]",
        name: "itemPredicates",
        type: "tuple[]",
      },
    ],
    name: "initializeLoanWithCollateralPermitAndItems",
    outputs: [{ internalType: "uint256", name: "loanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "borrower", type: "address" },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        components: [
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "address", name: "verifier", type: "address" },
        ],
        internalType: "struct LoanLibrary.Predicate[]",
        name: "itemPredicates",
        type: "tuple[]",
      },
    ],
    name: "initializeLoanWithItems",
    outputs: [{ internalType: "uint256", name: "loanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "isAllowedCollateral",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "isAllowedCurrency",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "verifier", type: "address" }],
    name: "isAllowedVerifier",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    name: "isApproved",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "bytes32", name: "sighash", type: "bytes32" },
    ],
    name: "isApprovedForContract",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "target", type: "address" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    name: "isSelfOrApproved",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        internalType: "enum IOriginationController.Side",
        name: "side",
        type: "uint8",
      },
      { internalType: "bytes32", name: "itemsHash", type: "bytes32" },
    ],
    name: "recoverItemsSignature",
    outputs: [
      { internalType: "bytes32", name: "sighash", type: "bytes32" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        internalType: "enum IOriginationController.Side",
        name: "side",
        type: "uint8",
      },
    ],
    name: "recoverTokenSignature",
    outputs: [
      { internalType: "bytes32", name: "sighash", type: "bytes32" },
      { internalType: "address", name: "signer", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "oldLoanId", type: "uint256" },
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
    ],
    name: "rolloverLoan",
    outputs: [{ internalType: "uint256", name: "newLoanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "oldLoanId", type: "uint256" },
      {
        components: [
          {
            internalType: "uint256",
            name: "proratedInterestRate",
            type: "uint256",
          },
          { internalType: "uint256", name: "principal", type: "uint256" },
          {
            internalType: "address",
            name: "collateralAddress",
            type: "address",
          },
          { internalType: "uint96", name: "durationSecs", type: "uint96" },
          { internalType: "uint256", name: "collateralId", type: "uint256" },
          { internalType: "address", name: "payableCurrency", type: "address" },
          { internalType: "uint96", name: "deadline", type: "uint96" },
          { internalType: "bytes32", name: "affiliateCode", type: "bytes32" },
        ],
        internalType: "struct LoanLibrary.LoanTerms",
        name: "loanTerms",
        type: "tuple",
      },
      { internalType: "address", name: "lender", type: "address" },
      {
        components: [
          { internalType: "uint8", name: "v", type: "uint8" },
          { internalType: "bytes32", name: "r", type: "bytes32" },
          { internalType: "bytes32", name: "s", type: "bytes32" },
          { internalType: "bytes", name: "extraData", type: "bytes" },
        ],
        internalType: "struct IOriginationController.Signature",
        name: "sig",
        type: "tuple",
      },
      { internalType: "uint160", name: "nonce", type: "uint160" },
      {
        components: [
          { internalType: "bytes", name: "data", type: "bytes" },
          { internalType: "address", name: "verifier", type: "address" },
        ],
        internalType: "struct LoanLibrary.Predicate[]",
        name: "itemPredicates",
        type: "tuple[]",
      },
    ],
    name: "rolloverLoanWithItems",
    outputs: [{ internalType: "uint256", name: "newLoanId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      { internalType: "bool[]", name: "isAllowed", type: "bool[]" },
    ],
    name: "setAllowedCollateralAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "tokens", type: "address[]" },
      {
        components: [
          { internalType: "bool", name: "isAllowed", type: "bool" },
          { internalType: "uint256", name: "minPrincipal", type: "uint256" },
        ],
        internalType: "struct IOriginationController.Currency[]",
        name: "currencyData",
        type: "tuple[]",
      },
    ],
    name: "setAllowedPayableCurrencies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "verifiers", type: "address[]" },
      { internalType: "bool[]", name: "isAllowed", type: "bool[]" },
    ],
    name: "setAllowedVerifiers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
];

const decoder = new InputDataDecoder(abi);
web3.eth.getTransaction(txHash).then((tx) => {
  const result = decoder.decodeData(tx.input);

  console.log("Method:", result.method);
  console.log("Types:", result.types);
  console.log("Inputs:");

  for (let i = 0; i < result.names.length; i++) {
    const name = result.names[i];
    const input = result.inputs[i];

    if (Array.isArray(input)) {
      console.log(`${name}: [`);

      input.forEach((item) => {
        console.log(`  ${JSON.stringify(item)},`);
      });
      console.log("]");
    } else {
      console.log(`${name}: ${JSON.stringify(input)}`);
    }
  }
});