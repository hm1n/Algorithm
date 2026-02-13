/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = input[0];
    const F = Number(input[1]);

    N = Number(input[0].slice(0, input[0].length - 2) + "00");

    while (N % F !== 0) {
        N++;
    }

    N = N.toString();
    console.log(N.slice(N.length - 2));
}

solution(input);