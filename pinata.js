const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

const pinata = pinataSDK(
  "87004c1b7a21cd480b9b",
  "62cf4f4814b9d0dc96f7c6fdb0f9ed0c06f02dcaed2a84f7d4adb278c1aa5c92"
);

pinata
  .testAuthentication()
  .then((result) => {
    //handle successful authentication here
    console.log(result);
  })
  .catch((err) => {
    //handle error here
    console.log(err);
  });

for (let i = 1; i <= 9; ++i) {
  const readableStreamForFile = fs.createReadStream(
    `./src/Components/pages/images/${i}.jpg`
  );
  const options = {
    pinataMetadata: {
      name: `${i}.jpg`,
    },
    pinataOptions: {
      cidVersion: 0,
    },
  };
  pinata
    .pinFileToIPFS(readableStreamForFile, options)
    .then((result) => {
      //handle results here
      let url = `https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`;
      console.log(url);
      // console.log(result);
    })
    .catch((err) => {
      //handle error here

      console.log(err);
    });
}
