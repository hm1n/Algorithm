/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [A, B] = input[0].split(" ").map(Number);

    const arr = [0];

    let idx = 0;
    for (let i = 1; idx <= 1000; i++) {
        for (let j = 0; j < i && idx <= 1000; j++) {
            arr.push(i);
            idx++;
        }
    }

    const sum = [0, 1];
    for (let i = 2; i <= 1000; i++) {
        sum.push(sum[i - 1] + arr[i]);
    }

    console.log(sum[B] - sum[A - 1]);
}

solution(input);