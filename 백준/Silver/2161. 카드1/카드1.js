/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const cards = [];
    let answer = "";

    for (let i = N; i >= 1; i--) {
        cards.push(i);
    }

    while (cards.length > 1) {
        answer += `${cards.pop()} `;
        cards.unshift(cards.pop());
    }

    answer += `${cards.pop()}`;

    console.log(answer);
}

solution(input);