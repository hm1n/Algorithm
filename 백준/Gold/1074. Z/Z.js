/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, r, c] = input[0].split(" ").map(Number);
    let ans = 0;

    function div(N, r, c) {
        const num = N ** 2 / 4;
        const R = N / 2;
        const C = N / 2;

        // 1
        if (r <= R && c <= C) {
            ans += num * 0;
            if (num === 1) return;
            div(N / 2, r, c);
        }

        // 2
        if (r <= R && c > C) {
            ans += num * 1;
            if (num === 1) return;
            div(N / 2, r, c - C);
        }

        // 3
        if (r > R && c <= C) {
            ans += num * 2;
            if (num === 1) return;
            div(N / 2, r - R, c);
        }

        // 4
        if (r > R && c > C) {
            ans += num * 3;
            if (num === 1) return;
            div(N / 2, r - R, c - C);
        }
    }

    div(2 ** N, r + 1, c + 1);
    console.log(ans);
}

solution(input);