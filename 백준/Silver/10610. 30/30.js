/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = input[0].split("").map(Number);

    let flag = 0;
    let sum = 0;

    for (let n of N) {
        if (n === 0) flag = 1;
        sum += n;
    }

    // 3의 배수는 자리수의 합이 3의 배수이다. 우와
    if (sum % 3 === 0 && flag) {
        console.log(N.sort((a, b) => b - a).join(""));
    } else {
        console.log(-1);
    }
}

solution(input);