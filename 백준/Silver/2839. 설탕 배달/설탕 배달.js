/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = Number(input[0]);

    let cnt5 = 0;
    let cnt3 = 0;

    if (N === 4 || N === 7) {
        console.log(-1);
        return;
    }

    while (N >= 5) {
        N -= 5;
        cnt5++;
    }

    while (N > 0 && N % 3 !== 0) {
        N += 5;
        cnt5--;
    }

    while (N >= 3) {
        N -= 3;
        cnt3++;
    }

    if (N === 0) {
        console.log(cnt5 + cnt3);
    } else {
        console.log(-1);
    }
}

solution(input);