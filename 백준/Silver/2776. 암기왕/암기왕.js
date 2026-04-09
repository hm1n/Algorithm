/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    let idx = 1;
    let ans = "";

    for (let i = 0; i < T; i++) {
        const N = Number(input[idx++]);
        const set = new Set(input[idx++].split(" ").map(Number));
        const M = Number(input[idx++]);
        const arr = input[idx++].split(" ").map(Number);

        for (let num of arr) {
            if (set.has(num)) {
                ans += `${1}\n`;
            } else {
                ans += `${0}\n`;
            }
        }
    }
    console.log(ans.trimEnd());
}

solution(input);