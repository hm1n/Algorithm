/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    for (let i = 0; i < T; i++) {
        const [a, b] = input[1 + i].split(" ").map(Number);

        let pow = 1;
        for (let j = 0; j < b; j++) {
            pow = (pow * a) % 10;
        }
        if (pow === 0) console.log(10);
        else console.log(pow);
    }
}

solution(input);