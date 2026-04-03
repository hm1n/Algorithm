/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let answer = "";
    let cnt = 0;

    function hanoi(N, start, end, sub) {
        if (N === 1) {
            answer += `${start} ${end}\n`;
            cnt++;
            return;
        } else {
            hanoi(N - 1, start, sub, end);
            answer += `${start} ${end}\n`;
            cnt++;
            hanoi(N - 1, sub, end, start);
        }
    }
    hanoi(N, 1, 3, 2);
    console.log(cnt);
    console.log(answer.trim());
}

solution(input);