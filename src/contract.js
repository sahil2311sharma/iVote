import { abi } from "./build/iVote.json";
import web3 from "./web3";
const address = "0x5487A427de6648DC830d8038F867C7bB7f527CAa";
const iVoteContract = new web3.eth.Contract(abi, address);
export default iVoteContract;
