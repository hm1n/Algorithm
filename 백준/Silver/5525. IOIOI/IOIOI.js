/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = +input[0];
    const M = +input[1];
    const S = input[2];

    let ans = 0;
    let i = 0;
    while (i < M) {
        if (S[i] === "I") {
            let cnt = 0;

            while (i + 2 < M) {
                if (S[i + 1] === "O" && S[i + 2] === "I") {
                    i += 2;
                    cnt++;
                } else {
                    break;
                }
            }
            if (cnt >= N) ans += cnt - N + 1;
        }
        i++;
    }

    console.log(ans);
}
solution(input);