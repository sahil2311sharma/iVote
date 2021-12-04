import React, { useState } from "react";

import Navi from "./parts/NaviConnect";
import Previous from "./parts/Previous";
import Parties from "./parts/Parties";

function ElectionParties({ authenticated }) {
  const [web3, setWeb3] = useState(null);
  const [addr, setAddr] = useState("");
  return (
    <div className="whole_page_container">
      <Navi setWeb3={setWeb3} setAddr={setAddr} web3={web3} addr={addr} />
      <Previous />
      <Parties web3={web3} addr={addr} authenticated={authenticated} />
    </div>
  );
}

export default ElectionParties;
