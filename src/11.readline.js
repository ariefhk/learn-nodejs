import readline from "readline/promises";
import process from "process";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const answer = await rl.question("Who are you? ");

if (answer.toLowerCase() !== "arief") {
    console.log("You are not Arief!");
} else {
    console.log("Hi, Arief :D");
}

rl.close();
