/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const map = new Map();

    for (let i = 0; i < 26; i++) {
        map.set(String.fromCharCode("a".charCodeAt() + i), -1);
    }

    for (let i = 0; i < input[0].length; i++) {
        if (map.get(input[0][i]) === -1) map.set(input[0][i], i);
    }

    map.forEach((v, _) => process.stdout.write(`${v} `));
}

solution(input);