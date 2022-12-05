import { fork } from "child_process";
import path from "path";
import { stdin, stdout } from "process";
import { fileURLToPath } from "url";

const spawnChildProcess = async (args) => {
  // Write your code here
  const FileName = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "files/script.js"
  );
  const child = fork(FileName, args, { silent: true });
  child.stdout.pipe(process.stdout);
  process.stdin.pipe(child.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["a", "b"]);
