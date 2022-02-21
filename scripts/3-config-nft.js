import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xBC060D2f1194f27eF6D38d5E1778D3984792CE55",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "DAO Passport",
        description: "This NFT will give you access to travelDAO!",
        image: readFileSync("scripts/assets/passport.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()