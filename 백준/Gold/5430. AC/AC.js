/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    let line = 1;
    let ans = "";

    for (let i = 0; i < T; i++) {
        const str = input[line++];
        const N = Number(input[line++]);
        const arr =
            N > 0
                ? input[line]
                      .slice(1, input[line].length - 1)
                      .split(",")
                      .map(Number)
                : [];

        line++;

        let reverse = 0;
        let left = 0;
        let right = arr.length;
        let res = [...arr];

        for (let op of str) {
            if (op === "R") {
                reverse = reverse ? 0 : 1;
            }
            if (op === "D") {
                if (left < right) {
                    if (reverse) {
                        right--;
                    } else {
                        left++;
                    }
                } else {
                    res = "error";
                    break;
                }
            }
        }

        if (res !== "error") {
            res = res.slice(left, right);
            if (reverse) res = res.reverse();

            ans += "[";
            ans += res;
            ans += "]";
        } else {
            ans += res;
        }
        ans += "\n";
    }
    console.log(ans.trimEnd());
}

solution(input);