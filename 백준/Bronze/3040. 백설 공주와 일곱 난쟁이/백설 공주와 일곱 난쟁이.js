/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input.map(Number);

    const sum = arr.reduce((a, b) => a + b);

    for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - arr[i] - arr[j] === 100) {
                arr.forEach((e, k) => {
                    if (k !== i && k !== j) console.log(e);
                });
                return;
            }
        }
    }
}

solution(input);