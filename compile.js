const path = require("path");
const fs = require("fs");
const solc = require("solc");
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "UTF-8");


// var input = {
//   language: "Solidity",
//   sources: {
//     "Inbox.sol": {
//       content: source,
//     },
//   },
//   settings: {
//     outputSelection: {
//       "*": {
//         "*": ["*"],
//       },
//     },
//   },
// };

var output = solc.compile(source,1)
// var output = JSON.parse(solc.compile(source));
module.exports = output.contracts[":Inbox"]
// console.log(solc.compile(source.toString(), 1));
