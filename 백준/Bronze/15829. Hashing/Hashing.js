/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let hash = 0;
    const n = Number(input[0]);
    const arr = input[1].split("").map((e) => {
        return e.charCodeAt() - "a".charCodeAt() + 1;
    });

    for (let i = n - 1; i >= 0; i--) {
        hash += arr[i] * Math.pow(31, i);
    }

    hash = hash % 1234567891;
    console.log(hash);
}

solution(input);
