import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const read = async () => {
  // Write your code here
  const fileName = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  );
  const readStream = fs.createReadStream(fileName);
  readStream.pipe(process.stdout);
};

await read();
