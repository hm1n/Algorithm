/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = BigInt(input[0]);
    let ans = 0n;
    let i = N;

    for (let i = 1n; i < N; i++) {
        ans += N * i + i;
    }
    console.log(BigInt(ans).toString());
}

solution(input);