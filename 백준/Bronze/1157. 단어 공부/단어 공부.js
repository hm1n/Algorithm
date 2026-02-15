/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const str = input[0].toUpperCase();
    const map = new Map();

    for (let ch of str) {
        if (!map.get(ch)) {
            map.set(ch, 1);
        } else {
            const cnt = map.get(ch);
            map.set(ch, cnt + 1);
        }
    }

    let maxCnt = 0;
    map.forEach((v, _) => {
        if (v > maxCnt) {
            maxCnt = v;
        }
    });

    let key = "";
    map.forEach((v, k) => {
        if (v === maxCnt) {
            key += k;
        }
    });

    key.length > 1 ? console.log("?") : console.log(key);
}

solution(input);