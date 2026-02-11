/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [a, b, c, d, e, f] = input[0].split(" ").map(Number);

    for (let x = -999; x <= 999; x++) {
        for (let y = -999; y <= 999; y++) {
            if (a * x + b * y === c && d * x + e * y === f) {
                console.log(x, y);
                return;
            }
        }
    }
}

solution(input);