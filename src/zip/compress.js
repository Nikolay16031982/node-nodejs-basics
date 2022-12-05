import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
const compress = async () => {
  // Write your code here
  const inputFileName = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToCompress.txt"
  );
  const outputFileName = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "archive.gz"
  );
  const Zlib = zlib.createGzip();
  const rstream = fs.createReadStream(inputFileName);
  const wstream = fs.createWriteStream(outputFileName);
  rstream.pipe(Zlib).pipe(wstream);
};

await compress();
