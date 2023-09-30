import { threadId, Worker } from "worker_threads";
import path from "path";

const filePathResolver = (mainPath) => {
    return path.resolve() + mainPath;
};

const worker1 = new Worker(filePathResolver("/src/24-worker-thread.js"));
const worker2 = new Worker(filePathResolver("/src/24-worker-thread.js"));

worker1.addListener("message", (message) => {
    console.log(`Thread ${threadId} receive from worker 1 : ${message}`);
});

worker2.addListener("message", (message) => {
    console.log(`Thread ${threadId} receive from worker 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
