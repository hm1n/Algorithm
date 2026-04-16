/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    const X = Number(input[2]);

    let cnt = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (arr[i] + arr[j] === X) cnt++;
        }
    }

    console.log(cnt);
}

solution(input);