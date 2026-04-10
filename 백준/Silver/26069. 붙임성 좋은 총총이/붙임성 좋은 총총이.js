/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const dance = new Set();
    const N = Number(input[0]);

    dance.add("ChongChong");

    for (let i = 0; i < N; i++) {
        const [a, b] = input[i + 1].split(" ");

        if (dance.has(a) || dance.has(b)) {
            dance.add(a);
            dance.add(b);
        }
    }
    console.log(dance.size);
}

solution(input);