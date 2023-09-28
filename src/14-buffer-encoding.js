//encoding
const buffer = Buffer.from("Arief Rachman Hakim", "utf-8");

//decoding
console.log("UTF-8: ", buffer.toString());
console.log("Base64: ", buffer.toString("base64"));
console.log("Hex: ", buffer.toString("hex"));

//encoding
console.log(
    Buffer.from("QXJpZWYgUmFjaG1hbiBIYWtpbQ==", "base64").toString("utf-8")
);
