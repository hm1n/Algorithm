/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(Number(input[1 + i]));
    }

    if (arr.length === 0) {
        console.log(0);
        return;
    }

    arr.sort((a, b) => a - b);

    const del = Math.round(N * 0.15);
    const sum = arr.filter((_, i) => del <= i && i < N - del).reduce((pv, e) => pv + e, 0);
    const avg = Math.round(sum / (N - del * 2));
    console.log(avg);
}

solution(input);