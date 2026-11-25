/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const a = input[1].split(" ").map(Number);
    const counts = new Map();

    for (const num of a) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    function calc(x, y) {
        return (x * y)
            .toString()
            .split("")
            .map(Number)
            .reduce((a, b) => a + b);
    }

    let max = -Infinity;
    const keys = [...counts.keys()];
    for (let i = 0; i < keys.length; i++) {
        for (let j = i; j < keys.length; j++) {
            if (keys[i] === keys[j] && counts.get(keys[i]) < 2) continue;

            const res = calc(keys[i], keys[j]);
            if (res > max) max = res;
        }
    }

    console.log(max);
}

solution(input);