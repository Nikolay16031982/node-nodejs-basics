import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const copy = async () => {
  // Write your code here
  const inputDirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files"
  );
  const outputDirPath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files_copy"
  );
  if (!fs.existsSync(inputDirPath) || fs.existsSync(outputDirPath))
    console.error("FS operation failed");
  else {
    fs.mkdir(outputDirPath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    fs.readdir(inputDirPath, (err, files) => {
      if (err) {
        console.error(err);
        return;
      } else {
        files.forEach((fileName) => {
          let inputFilePath = path.join(inputDirPath, fileName);
          let outputFilePath = path.join(outputDirPath, fileName);
          fs.copyFile(inputFilePath, outputFilePath, (err) => {
            if (err) {
              console.error(err);
              return;
            } else console.log("Файл успешно копирован");
          });
        });
      }
    });
  }
};

await copy();
