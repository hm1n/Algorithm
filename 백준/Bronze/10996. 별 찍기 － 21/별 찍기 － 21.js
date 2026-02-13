/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    if (N === 1) {
        console.log("*");
        return;
    }

    for (let i = 1; i <= N * 2; i++) {
        let str = "";
        for (let j = 1; j <= N; j++) {
            if ((i + j) % 2 === 0) str += "*";
            else str += " ";
        }
        console.log(str);
    }
}

solution(input);