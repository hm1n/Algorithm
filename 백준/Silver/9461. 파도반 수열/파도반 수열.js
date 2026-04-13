/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    const P = [];
    const ans = [];

    P.push(1);
    P.push(1);
    P.push(1);
    P.push(2);
    P.push(2);
    P.push(3);

    for (let i = 5; i <= 100; i++) {
        P.push(P[i] + P[i - 4]);
    }

    for (let i = 0; i < T; i++) {
        const N = Number(input[1 + i]);

        ans.push(P[N - 1]);
    }

    console.log(ans.join("\n"));
}

solution(input);