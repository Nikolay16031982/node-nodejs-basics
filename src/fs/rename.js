import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url'
const rename = async () => {
    // Write your code here
    const filePath = path.join(path.dirname(fileURLToPath(
        import.meta.url)), "files", "wrongFilename.txt")
    const renameFilePath = path.join(path.dirname(fileURLToPath(
        import.meta.url)), "files", "properFilename.md")
    if (!fs.existsSync(filePath) || fs.existsSync(renameFilePath))
        throw new Error("FS operation failed")
    else {
        fs.rename(filePath, renameFilePath, (err) => {
            if (err) throw err;
            console.log("File rename")
        })
    } 
};

await rename();