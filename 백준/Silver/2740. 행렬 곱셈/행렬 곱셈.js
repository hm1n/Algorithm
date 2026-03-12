/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const A = [];
    const B = [];

    let idx = 1;

    for (let i = 0; i < N; i++) {
        A.push(input[idx].split(" ").map(Number));
        idx++;
    }

    const [tmp, K] = input[idx++].split(" ").map(Number);

    for (let i = 0; i < M; i++) {
        B.push(input[idx].split(" ").map(Number));
        idx++;
    }

    let ans = "";

    for (let n = 0; n < N; n++) {
        for (let k = 0; k < K; k++) {
            let v = 0;
            for (let m = 0; m < M; m++) {
                v += A[n][m] * B[m][k];
            }
            ans += `${v} `;
        }
        ans += "\n";
    }
    console.log(ans.trim());
}

solution(input);