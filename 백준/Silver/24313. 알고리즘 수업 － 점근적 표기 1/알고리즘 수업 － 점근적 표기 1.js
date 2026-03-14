/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [a1, a0] = input[0].split(" ").map(Number);
    const c = Number(input[1]);
    const n0 = Number(input[2]);

    let answer = 1;

    for (let n = n0; n <= 100; n++) {
        if (a1 * n + a0 > c * n) {
            answer = 0;
            break;
        }
    }

    console.log(answer);
}

solution(input);