/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let N = Number(input[0]);
    const arr = [];

    let cnt5 = 0;
    let cnt3 = 0;

    while (cnt5 * 5 <= N) {
        if (cnt5 * 5 + cnt3 * 3 === N) {
            arr.push(cnt5 + cnt3);
        }

        while (cnt3 * 3 <= N) {
            if (cnt5 * 5 + cnt3 * 3 === N) {
                arr.push(cnt5 + cnt3);
            }
            cnt3++;
        }

        cnt3 = 0;
        cnt5++;
    }

    if (arr.length > 0) {
        console.log(Math.min(...arr));
    } else {
        console.log(-1);
    }
}

solution(input);