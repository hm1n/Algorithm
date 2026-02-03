/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const map = new Map();
    let count = 0;

    for (let i = 0; i < 10; i++) {
        const num = Number(input[i]);
        if (!map.get(num % 42)) {
            map.set(num % 42, 1);
            count++;
        }
    }

    console.log(count);
}

solution(input);