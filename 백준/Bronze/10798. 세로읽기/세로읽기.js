/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const words = [];

    for (let i = 0; i < 5; i++) {
        words.push(input[i].padEnd(15, " "));
    }

    let ans = "";
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 5; j++) {
            if (words[j][i] !== " ") {
                ans += words[j][i];
            }
        }
    }

    console.log(ans);
}

solution(input);