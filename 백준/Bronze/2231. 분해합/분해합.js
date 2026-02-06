/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        const sum =
            i +
            i
                .toString()
                .split("")
                .map(Number)
                .reduce((a, b) => a + b);

        if (sum === n) {
            console.log(i);
            return;
        }
    }
    console.log(0);
}
solution(input);