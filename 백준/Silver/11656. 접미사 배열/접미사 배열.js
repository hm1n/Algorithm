/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const str = input[0];
    const arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i));
    }

    console.log(arr.sort().join("\n"));
}

solution(input);