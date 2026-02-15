/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [A, B, V] = input[0].split(" ").map(Number);

    console.log(Math.ceil((V - A) / (A - B)) + 1);
}

solution(input);