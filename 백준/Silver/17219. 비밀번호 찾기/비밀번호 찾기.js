/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const map = new Map();
    let ans = "";

    for (let i = 0; i < N; i++) {
        const [url, pw] = input[1 + i].split(" ");
        map.set(url, pw);
    }

    for (let i = 0; i < M; i++) {
        const url = input[1 + N + i];
        ans += `${map.get(url)}\n`;
    }

    console.log(ans.trim());
}

solution(input);