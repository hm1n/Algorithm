/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let top = input[0][0];
    let ans = 10;

    for (let i = 1; i < input[0].length; i++) {
        if (top === input[0][i]) ans += 5;
        else ans += 10;

        top = input[0][i];
    }

    console.log(ans);
}

solution(input);