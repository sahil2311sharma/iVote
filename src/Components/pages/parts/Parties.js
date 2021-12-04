import React, { useState, useEffect } from "react";
import "../styles/parties.css";
import iVoteContract from "../../../contract";

const Parties = ({ web3, addr, authenticated }) => {
  const [parties, setParties] = useState([]);
  const [electionId, setElectionId] = useState(0);
  const [isPanic, setPanic] = useState(false);
  const [voteCounts, setVoteCounts] = useState([]);
  const imgUrls = [
    "https://gateway.pinata.cloud/ipfs/QmWGi96VZD7Kvbw537X52qzH8C5tgnTpSdGs5RkUyVfVku",
    "https://gateway.pinata.cloud/ipfs/QmZjw4fHL6FuR52nUAS9cm7cVa4AqGXucBoZccphvCYPdH",
    "https://gateway.pinata.cloud/ipfs/QmURzKXg4sPVb762bcY834onZmXKMbP7ryb13xGiY3X2CZ",
    "https://gateway.pinata.cloud/ipfs/QmetBdKae8hbrs4uJS7q6TSzGbT6YxwpPBe7MxiBoQtHpG",
    "https://gateway.pinata.cloud/ipfs/QmbRejJTTbjVbK4g7ntZUetsdkjh1skTUavnaRCk8bmdby",
    "https://gateway.pinata.cloud/ipfs/QmVyBsaop92HX59qzGfgDX24ar9219jRVEzMdsT9F7dSjS",
    "https://gateway.pinata.cloud/ipfs/Qmc7VGh89TyCFbTu9avbiosjDwwRHq9QZJdDv7CkXWoovu",
    "https://gateway.pinata.cloud/ipfs/QmaC59gmTJqoXH7ynqfTKRUtuRfypHo1hyr8UNEzaHEjHy",
    "https://gateway.pinata.cloud/ipfs/QmVEAALSktGpDD32AsvtkWqWi4adcPN7BR4tXAuYsPa7xs",
  ];
  useEffect(() => {
    async function getParties() {
      let electionId = await iVoteContract.methods._electionIdTracker().call();
      setElectionId(electionId);
      //   let election = await iVoteContract.methods
      //     .idToElection(electionId)
      //     .call();
      let candidates = await iVoteContract.methods
        .returnCandidatesForElection(electionId)
        .call();
      let votes = [];
      for (let i = 0; i < candidates.length; ++i) {
        let count = await iVoteContract.methods
          .candidateVotes(electionId, candidates[i])
          .call();
        console.log("votes: ", count);
        votes.push(count);
      }
      //   console.log(votes);
      setVoteCounts(votes);
      setParties(candidates);
    }
    getParties();
  }, []);

  const vote = async (event, candidate, panic) => {
    event.preventDefault();
    if (localStorage.getItem("authenticated")) {
      if (addr === "") {
        alert("Connect your wallet first.");
      } else {
        try {
          await iVoteContract.methods
            .voteForCandidate(electionId, candidate, panic)
            .send({ from: addr });
          alert("Your vote has been recorded!");
          redirect();
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("User not Autheticated!");
      redirect();
    }
  };

  const redirect = () => {
    window.location = "http://localhost:3000/";
  };

  const handleClick = (event) => {
    event.preventDefault();
    setPanic(true);
  };

  const proposals = parties.length
    ? parties.map((item, index) => {
        let url = imgUrls[index];
        return (
          <div className="card_box">
            <div
              style={{
                backgroundImage: `url(${url})`,
              }}
              className="party-logo"
            />

            <p>
              Vote Count: <b>{voteCounts[index]}</b>
            </p>

            <div className="party-name">
              <button
                className="vote-btn"
                onClick={(event) => {
                  vote(event, item, isPanic);
                }}
              >
                Vote Now
              </button>
              <div className="threat_btn">
                <input
                  type="radio"
                  value="Threat"
                  name="threat-btn"
                  onChange={handleClick}
                />
                Threat
              </div>
            </div>
          </div>
        );
      })
    : null;
  return (
    <div className="parties">
      <h1 className="h111">Present Running Elections</h1>
      <div className="parties-container">{proposals}</div>
    </div>
  );
};
export default Parties;
