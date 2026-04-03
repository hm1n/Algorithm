/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [A, B] = input[0].split(" ");
    const lenA = A.length;
    const lenB = B.length;
    const diff = [];

    for (let i = 0; i < lenB - lenA + 1; i++) {
        let cnt = 0;
        for (let j = 0; j < lenA; j++) {
            if (B[i + j] === A[j]) cnt++;
        }
        diff.push(lenA - cnt);
    }

    console.log(Math.min(...diff));
}

solution(input);