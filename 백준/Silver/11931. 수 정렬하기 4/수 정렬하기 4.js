/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    input.shift();
    console.log(
        input
            .map(Number)
            .sort((a, b) => b - a)
            .join("\n"),
    );
}

solution(input);