import net from "net";

const server = net.createServer((client) => {
    console.log("client connected");

    client.on("data", (data) => {
        console.log(`Receive data from client : ${data.toString()}`);
        client.write(`Hello ${data.toString()}\r\n`);
    });
});

server.listen(3000, "localhost", () => {
    console.log(`Server listen on localhost:3000`);
});
