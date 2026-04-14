/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const DP = new Array(1_000_001).fill(0);

    DP[1] = 1;
    DP[2] = 2;

    for (let i = 3; i < 1_000_001; i++) {
        DP[i] = (DP[i - 2] + DP[i - 1]) % 15746;
    }

    console.log(DP[N]);
}

solution(input);
