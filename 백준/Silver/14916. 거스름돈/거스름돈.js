/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = Number(input[0]);
    let five = Math.floor(N / 5);
    let two = 0;

    if (N < 5 && N % 2 === 1) {
        console.log(-1);
        return;
    }

    N -= five * 5;

    if (N % 2 === 1) {
        five--;
        N += 5;
    }

    two = N / 2;

    console.log(five + two);
}

solution(input);