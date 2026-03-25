/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    let ans = 0;

    for (let i = 0; i < N; i++) {
        let sum = 0;
        for (let j = i; j < N; j++) {
            sum += arr[j];
            if (sum === M) ans++;
        }
    }

    console.log(ans);
}

solution(input);