import net from "net";

const client = net.createConnection({
    port: 3000,
    host: "localhost",
});

setInterval(() => {
    client.write(`Arief\n`);
}, 1000);

client.on("data", (data) => {
    console.log(`Receive data from server: ${data.toString()}`);
});
