/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const C = Number(input[0]);

    for (let i = 0; i < C; i++) {
        const [N, ...arr] = input[1 + i].split(" ").map(Number);

        const sum = arr.reduce((a, b) => a + b);
        const avg = sum / N;

        let cnt = 0;
        arr.forEach((e) => {
            if (e > avg) cnt++;
        });

        console.log(`${(Math.round((cnt / N) * 100 * 1000) / 1000).toFixed(3)}%`);
    }
}

solution(input);