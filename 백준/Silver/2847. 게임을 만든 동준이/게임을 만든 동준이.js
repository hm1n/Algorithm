/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const score = [];
    let ans = 0;

    for (let i = 0; i < N; i++) {
        score.push(Number(input[1 + i]));
    }

    for (let i = N - 1; i > 0; i--) {
        if (score[i] <= score[i - 1]) {
            ans += score[i - 1] - score[i] + 1;
            score[i - 1] -= score[i - 1] - score[i] + 1;
        }
    }
    console.log(ans);
}

solution(input);