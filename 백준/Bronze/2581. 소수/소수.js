/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const M = Number(input[0]);
    const N = Number(input[1]);

    let min = -1;
    let sum = 0;
    for (let i = M; i <= N; i++) {
        let cnt = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt++;
        }
        if (cnt === 2) {
            if (min === -1) min = i;
            sum += i;
        }
    }

    if (sum === 0) {
        console.log(-1);
        return;
    }

    console.log(sum);
    console.log(min);
}
solution(input);
