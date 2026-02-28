/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    let x = 1;
    let y = 1;
    let cnt = 1;

    while (cnt < N) {
        if (x === 1 && y === 1) {
            x++;
            cnt++;
        }

        if (x === 1) {
            while (y > 1 && cnt < N) {
                y--;
                x++;
                cnt++;
            }
            if (cnt < N) {
                x++;
                cnt++;
            }
        } else if (y === 1) {
            while (x > 1 && cnt < N) {
                x--;
                y++;
                cnt++;
            }
            if (cnt < N) {
                y++;
                cnt++;
            }
        }
    }

    console.log(`${y}/${x}`);
}

solution(input);