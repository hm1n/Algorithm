/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const rope = [];
    const w = [];

    for (let i = 0; i < N; i++) {
        rope.push(Number(input[1 + i]));
    }

    rope.sort((a, b) => a - b);

    for (let i = 0; i < N; i++) {
        w.push(rope[i] * (N - i));
    }

    console.log(Math.max(...w));
}

solution(input);