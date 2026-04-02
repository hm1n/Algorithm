/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    let ans = "";

    let idx = 1;
    for (let i = 0; i < T; i++) {
        const [N, M] = input[idx++].split(" ").map(Number);
        idx += M;

        ans += `${N - 1}\n`;
    }
    console.log(ans.trim());
}

solution(input);