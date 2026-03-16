/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const str = input[0];
    const len = str.length;
    const ans = [];

    let idx = 0;

    while (idx < len) {
        if (str[idx] === ".") {
            ans.push(str[idx]);
            idx++;
        } else {
            let cnt = 0;
            while (str[idx] === "X") {
                idx++;
                cnt++;
            }

            if (cnt % 2 === 1) {
                console.log(-1);
                return;
            }

            while (cnt > 2) {
                cnt -= 4;
                ans.push("AAAA");
            }
            if (cnt === 2) {
                ans.push("BB");
            }
        }
    }
    console.log(ans.join(""));
}

solution(input);