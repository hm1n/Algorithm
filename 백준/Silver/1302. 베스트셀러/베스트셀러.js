/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const map = new Map();
    const ans = [];

    for (let i = 1; i < input.length; i++) {
        if (map.get(input[i]) > 0) {
            map.set(input[i], map.get(input[i]) + 1);
        } else {
            map.set(input[i], 1);
        }
    }

    const names = [...map.keys()];
    const values = [...map.values()];
    const max = Math.max(...values);

    for (let i = 0; i < values.length; i++) {
        if (values[i] === max) {
            ans.push(names[i]);
        }
    }

    ans.sort();
    console.log(ans[0]);
}

solution(input);