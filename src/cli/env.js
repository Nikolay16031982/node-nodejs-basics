const parseEnv = () => {
    // Write your code here 
    const args = Object.entries(process.env);
    args.forEach(([key, value]) => {
      if (key.includes("RSS_")) console.log(`${key} = ${value}`);
    });
};

parseEnv();