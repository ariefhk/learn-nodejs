import process from "process";

process.addListener("exit", (exitCode) => {
    console.log(`NodeJS exit with code ${exitCode}`);
});

// console.log(process.env);
console.log(process.argv);
console.log(process.report);

process.exit(1);
console.log("Not printed because already exit");
