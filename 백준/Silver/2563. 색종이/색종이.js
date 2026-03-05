/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    let cnt = 0;

    for (let i = 0; i < 101; i++) {
        const tmp = [];
        for (let j = 0; j < 101; j++) {
            tmp.push(0);
        }
        arr.push(tmp);
    }

    for (let i = 0; i < N; i++) {
        const [x, y] = input[1 + i].split(" ").map(Number);

        for (let p = 0; p < 10; p++) {
            for (let q = 0; q < 10; q++) {
                if (arr[y + p][x + q] === 0) {
                    arr[y + p][x + q] = 1;
                    cnt++;
                }
            }
        }
    }
    console.log(cnt);
}

solution(input);