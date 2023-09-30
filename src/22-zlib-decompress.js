import zlib from "zlib";
import fs from "fs";

import path from "path";

const filePath = path.resolve() + "/zlib-compress.js.txt";

const source = fs.readFileSync(filePath);
const result = zlib.unzipSync(source);

console.log(result.toString());
