/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = input[0];
    const arr = new Array(10).fill(0);

    for (let ch of N) {
        const num = Number(ch);
        arr[num]++;
    }
    arr[6] = Math.round((arr[6] + arr[9]) / 2);
    arr[9] = arr[6];

    console.log(Math.max(...arr));
}

solution(input);