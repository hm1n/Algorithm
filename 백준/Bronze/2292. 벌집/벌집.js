/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    let t = 6;
    let r = 1;
    let cnt = 1;

    while (r < N) {
        r += t;
        t = t + 6;
        cnt++;
    }
    console.log(cnt);
}

solution(input);