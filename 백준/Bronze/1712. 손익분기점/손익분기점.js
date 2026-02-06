/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [a, b, c] = input[0].split(" ").map(Number);

    if (b >= c) {
        console.log(-1);
        return;
    }
    let cnt = Math.floor(a / (c - b) + 1);
    console.log(cnt);
}
solution(input);
