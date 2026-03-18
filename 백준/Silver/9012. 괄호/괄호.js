/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    let ans = "";

    function isVPS(str) {
        const stack = [];
        let top = -1;

        for (let ch of str) {
            if (ch === "(") {
                stack.push(ch);
                top++;
            } else {
                if (top === -1) {
                    return false;
                }

                if (stack[top] === "(") {
                    stack.pop();
                    top--;
                }
            }
        }

        return top === -1 ? true : false;
    }

    for (let i = 0; i < N; i++) {
        const str = input[1 + i];
        if (isVPS(str)) {
            ans += "YES\n";
        } else {
            ans += "NO\n";
        }
    }

    console.log(ans.trim());
}

solution(input);