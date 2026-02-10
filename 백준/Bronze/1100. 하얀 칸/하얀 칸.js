/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    // 0 - 짝
    // 1 - 홀
    // 2 - 짝
    // ...
    let ans = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (i % 2 === 0 && j % 2 === 0 && input[i][j] === "F") {
                ans++;
            }
            if (i % 2 === 1 && j % 2 === 1 && input[i][j] === "F") {
                ans++;
            }
        }
    }
    console.log(ans);
}

solution(input);