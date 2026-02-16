/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const n = Number(input[0]);
    const pibo = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        const p = BigInt(pibo[i - 2]) + BigInt(pibo[i - 1]);
        pibo.push(p);
    }

    console.log(pibo[n].toString());
}

solution(input);