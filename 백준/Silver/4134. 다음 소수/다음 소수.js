/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    let ans = "";

    function checkPrime(num) {
        if (num < 2) return 0;
        if (num === 2) return 1;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return 0;
        }
        return 1;
    }

    for (let i = 0; i < N; i++) {
        arr.push(Number(input[1 + i]));
    }

    for (let num of arr) {
        let i = num;
        while (true) {
            if (i === 2) {
                ans += `${i}\n`;
                break;
            }
            if (i > 2 && i % 2 === 1 && checkPrime(i)) {
                ans += `${i}\n`;
                break;
            }
            i++;
        }
    }

    console.log(ans.trimEnd());
}

solution(input);