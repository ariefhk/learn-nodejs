const sampleFunc = () => {
    return Promise.resolve("Arief");
};

const myName = await sampleFunc();

console.log("My name is ", myName);
