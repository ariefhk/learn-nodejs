import { URL } from "url";

const urlPzn = new URL(
    `https://www.programmerzamannow.com/belajar?kelas=nodejs`
);

console.log(urlPzn.toString());
console.log(urlPzn.href);
console.log(urlPzn.protocol);
console.log(urlPzn.host);
console.log(urlPzn.pathname);
console.log(urlPzn.searchParams);

const ariefUrl = urlPzn;
ariefUrl.host = `www.ariefrh.com`;
ariefUrl.searchParams.append("status", "premium");

console.log(ariefUrl.toString());
console.log(ariefUrl.href);
console.log(ariefUrl.protocol);
console.log(ariefUrl.host);
console.log(ariefUrl.pathname);
console.log(ariefUrl.searchParams);
