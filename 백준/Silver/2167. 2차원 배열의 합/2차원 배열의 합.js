/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = [];
    let idx = 1;
    let answer = "";

    for (let i = 0; i < N; i++) {
        arr.push(input[idx++].split(" ").map(Number));
    }

    const K = Number(input[idx++]);

    for (let i = 0; i < K; i++) {
        const [i, j, x, y] = input[idx++].split(" ").map(Number);

        let sum = 0;
        for (let p = i - 1; p < x; p++) {
            for (let q = j - 1; q < y; q++) {
                sum += arr[p][q];
            }
        }
        answer += `${sum}\n`;
    }
    console.log(answer.trim());
}

solution(input);