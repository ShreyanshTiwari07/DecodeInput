const InputDataDecoder = require("ethereum-input-data-decoder");
const { Web3 } = require("web3");
const { BigNumber } = require("ethers");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/a03dbccb611148449aabbb9511985b51"
);
const txHash = "";

const abi = [];
const decoder = new InputDataDecoder(abi);

web3.eth.getTransaction(txHash).then((tx) => {
  const result = decoder.decodeData(tx.input);

  console.log(
    "loanTerms:",
    result.inputs[0].map((bn) => bn.toString())
  );
  console.log(
    "proratedInterestRate:",
    web3.utils.toChecksumAddress(result.inputs[1])
  );
  console.log("principal:", web3.utils.toChecksumAddress(result.inputs[2]));
  console.log(
    "collateralAddress:",
    result.inputs[3].map((item) => {
      if (typeof item === "string") {
        return item;
      } else if (typeof item === "number") {
        return item.toString();
      } else {
        return web3.utils.toChecksumAddress(item);
      }
    })
  );

  console.log("durationSecs:", result.inputs[4].toString());

  console.log(
    "collateralId:",
    result.inputs[5].map((item) =>
      item.map((subItem) =>
        typeof subItem === "string"
          ? subItem
          : web3.utils.toChecksumAddress(subItem)
      )
    )
  );
});
