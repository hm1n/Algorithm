/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = Number(input[0]);
    const arr = [];

    if (N === 1) return;

    for (let i = 2; i <= Math.sqrt(N); i++) {
        while (N % i === 0) {
            console.log(i);
            N = N / i;
        }
    }
    if (N > 1) console.log(N);
}

solution(input);