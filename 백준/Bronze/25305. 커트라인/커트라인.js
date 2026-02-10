/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);

    const prize = arr.sort((a, b) => b - a).slice(0, K);
    console.log(prize[K - 1]);
}

solution(input);
