/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const set = new Set(input[1].split(" ").map(Number));
    const arr = new Array(...set).sort((a, b) => a - b);
    console.log(arr.join(" "));
}

solution(input);