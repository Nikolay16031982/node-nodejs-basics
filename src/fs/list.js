import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const list = async () => {
  // Write your code here
  const dirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  if (!fs.existsSync(dirPath)) console.error("FS operation failed");
  else
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error(err);
        return;
      } else {
        files.forEach((fileName) => console.log(fileName));
      }
    });
};

await list();
