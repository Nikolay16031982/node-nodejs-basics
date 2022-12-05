import crypto from "crypto";
import fs, { readFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const calculateHash = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filename = path.resolve(
    __dirname,
    "files",
    "fileToCalculateHashFor.txt"
  );
  readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    const secret = "jygbk87ihn";
    const hash = crypto.createHash("sha256", secret).update(data).digest("hex");
    console.log(hash);
  });
};

await calculateHash();
