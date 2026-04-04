/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let answer = "";
    let cnt = 0;

    function move(from, to) {
        answer += `${from} ${to}\n`;
        cnt++;
    }

    function hanoi(n, from, to, rest) {
        if (n === 1) {
            move(from, to);
            return;
        }

        hanoi(n - 1, from, rest, to);
        move(from, to);
        hanoi(n - 1, rest, to, from);
    }

    function pHanoi(n, from, to, rest1, rest2) {
        if (n === 1) {
            move(from, to);
            return;
        }
        if (n === 2) {
            move(from, rest2);
            move(from, to);
            move(rest2, to);
            return;
        }

        hanoi(n - 2, from, rest1, rest2);
        move(from, rest2);
        move(from, to);
        move(rest2, to);
        pHanoi(n - 2, rest1, to, from, rest2);
    }

    pHanoi(N, "A", "D", "B", "C");
    console.log(cnt);
    console.log(answer.trimEnd());
}

solution(input);