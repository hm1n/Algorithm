/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];

    for (let i = 1; i <= N; i++) {
        arr.push(Number(input[i]));
    }

    arr.sort((a, b) => a - b).forEach((e) => console.log(e));
}

solution(input);