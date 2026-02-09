/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let [N, B] = input[0].split(" ");
    B = Number(B);

    N = parseInt(N, B);
    console.log(N);
}
solution(input);