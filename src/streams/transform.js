import fs from "fs";
import { pipeline, Transform } from "stream";
const transform = async () => {
  // Write your code here
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join(""));
    },
  });
  pipeline(process.stdin, reverse, process.stdout, (err) => {
    if (err) {
      console.log("Pipeline encountered an error:", err);
    } else {
      console.log("Pipeline ended");
    }
  });
};

await transform();
