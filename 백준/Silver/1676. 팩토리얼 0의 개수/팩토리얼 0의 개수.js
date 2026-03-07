/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    let cnt = 0;

    for (let i = 1; i <= N; i++) {
        let n = i;
        while (n % 5 === 0) {
            cnt++;
            n = Math.floor(n / 5);
        }
    }

    console.log(cnt);
}

solution(input);