import fs from "fs";

const writer = fs.createWriteStream("target.log");

// writer.write("Arief\n");
// writer.write("Rachman\n");
// writer.write("Hakim\n");
writer.write("Arief Rachman Hakim");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.log(data.toString());
});
