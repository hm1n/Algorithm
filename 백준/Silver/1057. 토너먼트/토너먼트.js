/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let [N, a, b] = input[0].split(" ").map(Number);
    let ans = 0;

    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        ans++;
    }
    console.log(ans);
}

solution(input);