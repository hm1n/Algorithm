/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, B] = input[0].split(" ");

    console.log(BigInt(N).toString(Number(B)).toUpperCase());
}

solution(input);