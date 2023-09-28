import os from "os";

console.table(os.userInfo());
console.log("os version: ", os.version());
console.log("os archicture: ", os.arch());
console.table(os.cpus());
console.log("os free memory: ", os.freemem());
console.log("os pid priority: ", os.getPriority());
console.log("os home directory: ", os.homedir());
console.log("os host name: ", os.hostname());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.type());
console.log(os.totalmem());
console.log(os.machine());
