/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    function isBalanced(str) {
        const stack = [];
        let top = -1;

        for (let ch of str) {
            if (ch === "(" || ch === "[") {
                stack.push(ch);
                top++;
            } else if (ch === ")") {
                if (stack[top] === "(") {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
            } else if (ch === "]") {
                if (stack[top] === "[") {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
            }
        }

        return top === -1 ? true : false;
    }

    for (let i = 0; i < input.length - 1; i++) {
        if (isBalanced(input[i])) {
            console.log("yes");
        } else {
            console.log("no");
        }
    }
}

solution(input);