/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = input[1].split(" ").map(Number);

    let start = arr[0];
    let end = arr[0];
    let max = 0;

    for (let i = 1; i < N; i++) {
        if (arr[i] > end) {
            end = arr[i];
        } else {
            if (end - start > max) max = end - start;
            start = arr[i];
            end = arr[i];
        }
    }
    if (end - start > max) max = end - start;
    console.log(max);
}

solution(input);