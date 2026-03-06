/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const card = new Set(input[1].split(" ").map(Number));
    const M = Number(input[2]);
    const num = input[3].split(" ").map(Number);

    let ans = "";

    for (let i = 0; i < M; i++) {
        if (card.has(num[i])) {
            ans += `1 `;
        } else {
            ans += `0 `;
        }
    }
    console.log(ans);
}

solution(input);