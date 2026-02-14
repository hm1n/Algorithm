/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = Number(input[0]);
    let P = N;
    let cnt = 0;

    while (true) {
        let Q = P.toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b);

        Q = Number([P % 10, Q % 10].join(""));
        P = Q;

        cnt++;

        if (Q === N) break;
    }
    console.log(cnt);
}

solution(input);