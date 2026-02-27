/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const set = new Set();
    let ans = "";

    for (let i = 0; i < N; i++) {
        const str = input[1 + i];

        if (!set.has(str)) {
            set.add(str);
        }
    }
    const arr = [...set.keys()];
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    arr.forEach((e) => {
        ans += `${e}\n`;
    });
    console.log(ans.trim());
}

solution(input);