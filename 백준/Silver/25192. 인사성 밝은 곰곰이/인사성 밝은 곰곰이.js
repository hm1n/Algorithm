/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let set = new Set();
    let ans = 0;

    for (let i = 0; i < N; i++) {
        const str = input[1 + i];

        if (str === "ENTER") {
            set.clear();
            continue;
        } else {
            if (!set.has(str)) {
                ans++;
                set.add(str);
            }
        }
    }
    console.log(ans);
}

solution(input);