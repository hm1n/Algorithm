/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    const [c1, c2, c3] = input;

    let ans = (arr.indexOf(c1) * 10 + arr.indexOf(c2)) * Math.pow(10, arr.indexOf(c3));
    console.log(ans);
}

solution(input);