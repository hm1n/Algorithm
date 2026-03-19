/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let ans = 0;

    for (let i = 1; i <= N; i++) {
        const str = i.toString();

        if (str.length === 2) {
            ans++;
        } else {
            ans++;

            const diff = str[1] - str[0];
            for (let j = 2; j < str.length; j++) {
                if (str[j] - str[j - 1] !== diff) {
                    ans--;
                    break;
                }
            }
        }
    }
    console.log(ans);
}

solution(input);