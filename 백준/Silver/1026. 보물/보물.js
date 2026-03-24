/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    const B = input[2].split(" ").map(Number);
    let S = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < N; i++) {
        S += A[i] * B[i];
    }
    console.log(S);
}

solution(input);