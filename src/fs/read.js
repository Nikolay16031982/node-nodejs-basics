import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const read = async () => {
  // Write your code here
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  );
  if (!fs.existsSync(filePath)) console.error("FS operation failed");
  else
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(data);
      }
    });
};

await read();
