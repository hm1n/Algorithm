/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let idx = 1;
    while (idx < input.length) {
        const N = Number(input[idx++]);

        let max = 0;
        let str = "";

        for (let i = 0; i < N; i++) {
            const [S, L] = input[idx++].split(" ");

            if (Number(L) > max) {
                max = Number(L);
                str = S;
            }
        }

        console.log(str);
    }
}

solution(input);