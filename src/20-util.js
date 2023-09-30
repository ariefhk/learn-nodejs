import util from "util";

console.log(util.format("Nama: %s", "arief"));

const person = { firstName: "Arief", lastName: "Hakim" };

console.log(util.format("Person : %j", person));
