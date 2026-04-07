/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    const dist = [];

    arr.push(Number(input[1]));

    for (let i = 1; i < N; i++) {
        arr.push(Number(input[1 + i]));
        dist.push(arr[i] - arr[i - 1]);
    }

    const minDist = Math.min(...dist);
    let gcd = 1;
    for (let i = 2; i <= minDist; i++) {
        let isGcd = 1;
        for (let d of dist) {
            if (d % i !== 0) {
                isGcd = 0;
                break;
            }
        }
        if (isGcd) {
            gcd = i;
        }
    }

    console.log((arr[N - 1] - arr[0]) / gcd - arr.length + 1);
}

solution(input);