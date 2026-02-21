/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input[0]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);

    let n = arr[2];

    while (true) {
        let cnt = 0;
        for (let i = 0; i < 5; i++) {
            if (n % arr[i] === 0) cnt++;
        }
        if (cnt >= 3) break;
        n++;
    }

    console.log(n);
}

solution(input);