import path from "path";
import os from "os";
import { fileURLToPath } from "url";
import { Worker } from "worker_threads";
const performCalculations = async () => {
    // Write your code here
    const workerFile = path.join(
        path.dirname(fileURLToPath(import.meta.url)),
        "worker.js"
      );
      const cpuAmount = os.cpus().length;
      const workers = [];

    for (let i = 0; i < cpuAmount; i++) {
        workers.push(new Promise((resolve,reject)=>{
            const worker = new Worker(workerFile, { workerData: 10 + i })
            worker.on("message",(data)=>{
                resolve({status:"resolved",data})
            })
             worker.on("error",(err)=>{
                reject({status:"error",data:null})
             })

        }))
        };

Promise.all(workers).then((rez)=>{
 console.log(rez)
})
         

}

await performCalculations();