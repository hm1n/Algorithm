/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arrA = input[1].split(" ").map(Number);
    const arrB = input[2].split(" ").map(Number);
    const setA = new Set(arrA);
    const setB = new Set(arrB);

    let ans = 0;

    for (let e of arrA) {
        if (!setB.has(e)) ans++;
    }
    for (let e of arrB) {
        if (!setA.has(e)) ans++;
    }

    console.log(ans);
}

solution(input);