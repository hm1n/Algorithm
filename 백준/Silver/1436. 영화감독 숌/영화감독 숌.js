/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    let cnt = 1;
    let ans = 666;

    while (cnt < N) {
        ans++;

        if (ans.toString().includes("666")) {
            cnt++;
        }
    }

    console.log(ans);
}

solution(input);