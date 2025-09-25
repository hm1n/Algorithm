/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const N = Number(input[0]);
const arr = [];
let answer = "";

for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
}

arr.sort((a, b) => b - a);

for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    answer += "\n";
}

console.log(answer);