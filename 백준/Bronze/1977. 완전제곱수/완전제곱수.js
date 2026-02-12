/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const M = Number(input[0]);
    const N = Number(input[1]);
    const pow = [];

    for (let i = 1; i < N; i++) {
        if (M <= i * i && i * i <= N) {
            pow.push(i * i);
        }
    }

    if (pow.length === 0) {
        console.log(-1);
        return;
    }

    console.log(pow.reduce((a, b) => a + b));
    console.log(pow[0]);
}

solution(input);