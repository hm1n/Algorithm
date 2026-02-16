/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input.map(Number);
    let x = 0;
    let y = 0;

    const sum = arr.reduce((a, b) => a + b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < 9; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - arr[i] - arr[j] === 100) {
                x = arr[i];
                y = arr[j];
            }
        }
    }

    arr.forEach((e) => {
        if (e !== x && e !== y) console.log(e);
    });
}

solution(input);