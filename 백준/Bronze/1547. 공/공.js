/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const M = Number(input[0]);
    const arr = [-1, 1, 0, 0]; // 편의상 0번째 인덱스에 -1 추가

    for (let i = 0; i < M; i++) {
        const [x, y] = input[1 + i].split(" ").map(Number);
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }

    console.log(arr.indexOf(1));
}

solution(input);