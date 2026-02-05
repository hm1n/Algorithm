/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);

    const ans = [];

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
                const sum = arr[i] + arr[j] + arr[k];
                if (sum <= M) ans.push(sum);
            }
        }
    }

    console.log(ans.sort((a, b) => b - a)[0]);
}

solution(input);