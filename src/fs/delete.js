import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const remove = async () => {
  // Write your code here
  const removeFilePath = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRemove.txt"
  );
  fs.unlink(removeFilePath, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log("Файл успешно удален");
  });
};

await remove();
