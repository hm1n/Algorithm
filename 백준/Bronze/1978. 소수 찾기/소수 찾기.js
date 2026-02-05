/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = input[1].split(" ").map(Number);
    let answer = 0;

    arr.forEach((e) => {
        let cnt = 0;
        for (let i = 1; i <= e; i++) {
            if (e % i === 0) cnt++;
        }

        if (cnt === 2) answer++;
    });

    console.log(answer);
}

solution(input);