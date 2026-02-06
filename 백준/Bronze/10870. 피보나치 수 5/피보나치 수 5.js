/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const n = Number(input[0]);
    const arr = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        const num = arr[i - 1] + arr[i - 2];
        arr.push(num);
    }

    console.log(arr[n]);
}

solution(input);