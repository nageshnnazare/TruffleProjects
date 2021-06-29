var contractABI = [];
var contractAddress = '0xE184E902C3AB5820d46d3e66C028CDc9189efe66';
var web3 = new Web3('http://localhost:9545');

var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);
console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);