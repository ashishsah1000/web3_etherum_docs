const assert = require("assert");
const ganache = require("ganache-cli");
const { describe, it, beforeEach } = require("mocha");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());


beforeEach(()=>{
    //get the list of all accounts

    // every function is async in Web3
    web3.eth.accounts().then(res=>console.log(res));
    // use one of the account 
})

describe("inbox")