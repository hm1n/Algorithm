/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    const S = [];

    let start = 0;
    let end = K - 1;

    S.push(0);
    for (let i = start; i <= end; i++) {
        S[0] += arr[i];
    }

    for (let i = 0; i < N - K; i++) {
        S.push(S[i] - arr[start++] + arr[++end]);
    }

    console.log(Math.max(...S));
}

solution(input);