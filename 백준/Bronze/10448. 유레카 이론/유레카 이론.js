/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [0];

    for (let i = 1; i <= 44; i++) {
        arr.push((i * (i + 1)) / 2);
    }

    for (let p = 0; p < N; p++) {
        const K = Number(input[1 + p]);
        let flag = 0;

        for (let i = 1; i < 44; i++) {
            for (let j = i; j < 44; j++) {
                for (let k = j; k < 44; k++) {
                    if (arr[i] + arr[j] + arr[k] === K) {
                        flag = 1;
                        break;
                    }
                }
            }
        }
        console.log(flag);
    }
}

solution(input);