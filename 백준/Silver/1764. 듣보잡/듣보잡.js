/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const set = new Set();
    const ans = [];

    for (let i = 0; i < N; i++) {
        set.add(input[1 + i]);
    }

    for (let i = 0; i < M; i++) {
        if (set.has(input[1 + N + i])) {
            ans.push(input[1 + N + i]);
        }
    }
    ans.sort();
    console.log(ans.length);
    console.log(ans.join("\n"));
}

solution(input);