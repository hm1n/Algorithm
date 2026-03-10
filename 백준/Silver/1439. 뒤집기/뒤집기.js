/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const S = input[0].split("").map(Number);
    const len = S.length;

    let zero = 0;
    let one = 0;

    for (let i = 0; i < len; i++) {
        if (S[i] === 0) zero++;
        else one++;

        let j;
        for (j = i; j < len && S[i] === S[j]; j++);
        i = j - 1;
    }
    console.log(Math.min(zero, one));
}

solution(input);