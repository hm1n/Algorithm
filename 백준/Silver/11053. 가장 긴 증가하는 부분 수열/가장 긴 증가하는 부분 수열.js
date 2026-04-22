/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = +input[0];
    const arr = input[1].split(" ").map(Number);
    const DP = new Array(N).fill(1);

    for (let i = 1; i < N; i++) {
        let dp = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] > arr[j] && DP[j] > dp) {
                dp = DP[j];
            }
        }
        DP[i] = dp + 1;
    }

    console.log(Math.max(...DP));
}

solution(input);