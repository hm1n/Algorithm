/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const queue = [];
    let ans = "";

    for (let i = 0; i < N; i++) {
        const op = input[1 + i].split(" ")[0];

        switch (op) {
            case "push_back":
                queue.push(Number(input[1 + i].split(" ")[1]));
                break;
            case "push_front":
                queue.unshift(Number(input[1 + i].split(" ")[1]));
                break;
            case "pop_back":
                ans += queue.length === 0 ? `-1\n` : `${queue.pop()}\n`;
                break;
            case "pop_front":
                ans += queue.length === 0 ? `-1\n` : `${queue.shift()}\n`;
                break;
            case "size":
                ans += `${queue.length}\n`;
                break;
            case "empty":
                ans += queue.length === 0 ? `1\n` : `0\n`;
                break;
            case "front":
                ans += queue.length === 0 ? `-1\n` : `${queue[0]}\n`;
                break;
            case "back":
                ans += queue.length === 0 ? `-1\n` : `${queue[queue.length - 1]}\n`;
                break;
        }
    }
    console.log(ans.trim());
}

solution(input);