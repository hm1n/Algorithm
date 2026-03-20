/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const cards = input[1].split(" ").map(Number);
    const nums = input[3].split(" ").map(Number);
    const map = new Map();
    let ans = "";

    for (let c of cards) {
        if (map.get(c) > 0) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }

    for (let n of nums) {
        if (map.get(n) > 0) {
            ans += `${map.get(n)} `;
        } else {
            ans += "0 ";
        }
    }
    console.log(ans.trim());
}

solution(input);