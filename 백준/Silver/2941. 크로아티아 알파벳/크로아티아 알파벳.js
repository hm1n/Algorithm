/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const str = input[0];
    const check1 = "dz=";
    const check2 = ["c=", "c-", "d-", "lj", "nj", "s=", "z="];
    let cnt = 0;

    for (let i = 0; i < str.length - 1; i++) {
        let substr = str.slice(i, i + 3);

        if (substr === check1) {
            i += 2;
            cnt += 2;
        } else {
            substr = substr.slice(0, 2);

            if (check2.includes(substr)) {
                i++;
                cnt++;
            }
        }
    }

    console.log(str.length - cnt);
}

solution(input);