/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let ans;

    let minSet = 1000;
    let minOne = 1000;
    for (let i = 0; i < M; i++) {
        const [set, one] = input[1 + i].split(" ").map(Number);
        if (set < minSet) minSet = set;
        if (one < minOne) minOne = one;
    }

    ans = minSet * Math.floor(N / 6) + minOne * (N % 6);

    if (minSet * (Math.floor(N / 6) + 1) < ans) {
        ans = minSet * (Math.floor(N / 6) + 1);
    }

    if (minOne * N < ans) {
        ans = minOne * N;
    }

    console.log(ans);
}

solution(input);