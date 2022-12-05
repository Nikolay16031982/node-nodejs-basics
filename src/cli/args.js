const parseArgs = () => {
    // Write your code here 
    const args = process.argv;
    args.forEach((arg, index) => {
      if (arg.includes("--"))
        console.log(`${args[index].replace("--", "")} is ${args[index + 1]}`);
    });
};

parseArgs();