import fs from "fs/promises";
import path from "path";

//locate file
const file = path.resolve() + "/src/05-file-system.js";

// file to buffer
const buffer = await fs.readFile(file);

//convert buffer
const bufferToStr = buffer.toString();

console.log(bufferToStr);

// write file
await fs.writeFile("temp.txt", "Hello node js");
