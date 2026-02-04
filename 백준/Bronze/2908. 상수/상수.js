/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [a, b] = input[0].split(" ");

    const A = Number(a.split("").reverse().join(""));
    const B = Number(b.split("").reverse().join(""));

    A > B ? console.log(A) : console.log(B);
}

solution(input);