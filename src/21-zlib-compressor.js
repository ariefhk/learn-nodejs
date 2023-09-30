import zlib from "zlib";
import fs from "fs";
import path from "path";

const filePath = path.resolve() + "/src/21-zlib-compressor.js";
const resource = fs.readFileSync(filePath);
const result = zlib.gzipSync(resource);

fs.writeFileSync("zlib-compress.js.txt", result);
