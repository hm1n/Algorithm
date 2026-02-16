/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = input[1]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    console.log(arr[0] * arr[N - 1]);
}

solution(input);