/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const set = new Set();

    for (let i = 0; i < 10; i++) {
        const num = Number(input[i]);
        if (!set.has(num % 42)) {
            set.add(num % 42, 1);
        }
    }

    console.log(set.size);
}

solution(input);