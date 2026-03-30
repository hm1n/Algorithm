/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const stack = [];
    let top = -1;
    let ans = "";

    for (let i = 0; i < N; i++) {
        const op = input[1 + i].split(" ").map(Number)[0];

        switch (op) {
            case 1:
                const x = input[1 + i].split(" ").map(Number)[1];
                stack.push(x);
                top++;
                break;
            case 2:
                if (top > -1) {
                    ans += `${stack.pop()}\n`;
                    top--;
                } else {
                    ans += `${top}\n`;
                }
                break;
            case 3:
                ans += `${top + 1}\n`;
                break;
            case 4:
                ans += top === -1 ? `1\n` : `0\n`;
                break;
            case 5:
                if (top > -1) {
                    ans += `${stack[top]}\n`;
                } else {
                    ans += `${top}\n`;
                }
                break;
        }
    }
    console.log(ans.trim());
}

solution(input);