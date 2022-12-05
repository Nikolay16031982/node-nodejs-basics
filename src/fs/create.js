import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const create = async () => {
  // Write your code here
  const filePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fresh.txt"
  );

  if (!fs.existsSync(filePath))
    fs.writeFile(filePath, "I am fresh and young", (eror) => {
      if (eror) throw eror;
      else console.log("File create");
    });
  else console.error("FS operation failed");
};

await create();
