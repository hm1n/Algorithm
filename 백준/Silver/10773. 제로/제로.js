/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = [];
    const K = Number(input[0]);

    for (let i = 0; i < K; i++) {
        const n = Number(input[1 + i]);

        if (n === 0) {
            arr.pop();
        } else {
            arr.push(n);
        }
    }
    if (arr.length === 0) {
        console.log(0);
    } else {
        console.log(arr.reduce((a, b) => a + b, 0));
    }
}

solution(input);