/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = Array.from({length: 100}, () => Array(100).fill(0));
    let ans = 0;

    for (let i = 0; i < 4; i++) {
        const [x0, y0, x1, y1] = input[i].split(" ").map(Number);

        for (let x = x0; x < x1; x++) {
            for (let y = y0; y < y1; y++) {
                if (arr[x - 1][y - 1] === 0) {
                    arr[x - 1][y - 1] = 1;
                    ans++;
                }
            }
        }
    }

    console.log(ans);
}

solution(input);