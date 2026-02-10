/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    const [B, C] = input[2].split(" ").map(Number);

    let ans = 0;
    A.forEach((e) => {
        ans += 1;
        e -= B;

        if (e > 0) {
            ans += Math.ceil(e / C);
        }
    });

    console.log(ans);
}
solution(input);