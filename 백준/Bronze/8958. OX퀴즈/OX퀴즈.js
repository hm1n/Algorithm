/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const n = Number(input[0]);

    for (let i = 1; i <= n; i++) {
        const str = input[i];

        let ans = 0;
        let p = 0;

        while (p < str.length) {
            let cnt = 0;

            if (str[p] === "O") {
                cnt++;
                ans += cnt;

                let q = p + 1;
                while (str[q] === "O") {
                    cnt++;
                    ans += cnt;
                    q++;
                }
                p = q;
            }
            p++;
        }
        console.log(ans);
    }
}

solution(input);