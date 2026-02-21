/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input.map(Number);

    let sum = 0;

    for (let i = 0; i < 10; i++) {
        const diff1 = Math.abs(100 - sum);
        const diff2 = Math.abs(100 - sum - arr[i]);

        if (diff1 >= diff2) {
            sum += arr[i];
        } else {
            break;
        }
    }
    console.log(sum);
}

solution(input);