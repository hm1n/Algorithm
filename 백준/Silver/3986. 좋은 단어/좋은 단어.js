/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let ans = 0;

    function isGood(str) {
        const stack = [];
        let top = -1;

        for (let ch of str) {
            if (top > -1) {
                if (stack[top] === ch) {
                    stack.pop();
                    top--;
                } else {
                    stack.push(ch);
                    top++;
                }
            } else {
                stack.push(ch);
                top++;
            }
        }
        if (stack.length > 0) {
            return 0;
        } else {
            return 1;
        }
    }

    for (let i = 1; i < input.length; i++) {
        ans += isGood(input[i]);
    }

    console.log(ans);
}

solution(input);