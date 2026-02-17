/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    for (let i = 0; i < input.length - 1; i++) {
        let flag = 1;

        let p = 0;
        let q = input[i].length - 1;
        while (p <= q) {
            if (input[i][p] !== input[i][q]) {
                flag = 0;
                break;
            }
            p++;
            q--;
        }

        flag === 1 ? console.log("yes") : console.log("no");
    }
}

solution(input);