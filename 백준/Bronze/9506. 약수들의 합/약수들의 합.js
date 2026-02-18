/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    for (let i = 0; i < input.length - 1; i++) {
        const N = Number(input[i]);
        const arr = [];

        for (let i = 1; i < N; i++) {
            if (N % i === 0) arr.push(i);
        }

        const sum = arr.reduce((a, b) => a + b);
        if (N === sum) {
            console.log(`${N} = ${arr.join(" + ")}`);
        } else {
            console.log(`${N} is NOT perfect.`);
        }
    }
}

solution(input);