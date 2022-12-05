import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const write = async () => {
  // Write your code here
  const fileName = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToWrite.txt"
  );
  const writeStream = fs.createWriteStream(fileName);
  process.stdin.pipe(writeStream);
};

await write();
