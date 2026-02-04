/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [a, b, c] = input.map(Number);
    const count = [];
    const product = (a * b * c).toString();

    for (let i = 0; i < 10; i++) count.push(0);
    for (let n of product) {
        count[n]++;
    }

    count.forEach((e) => console.log(e));
}

solution(input);