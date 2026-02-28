/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];

    for (let i = 0; i < N; i++) {
        const [x, y] = input[1 + i].split(" ").map(Number);
        arr.push([x, y]);
    }

    arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let ans = "";
    arr.forEach((e) => {
        ans += `${e[0]} ${e[1]}\n`;
    });
    console.log(ans.trim());
}

solution(input);