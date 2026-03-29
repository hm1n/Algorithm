/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let ans = 0;

    let t = 10;
    let n = 1;

    for (let i = 1; i <= N; i++) {
        if (i < t) {
            ans += n;
        } else {
            t *= 10;
            n++;
            ans += n;
        }
    }

    console.log(ans);
}
solution(input);