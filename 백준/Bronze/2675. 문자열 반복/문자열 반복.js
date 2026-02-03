/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const n = input[0];

    for (let i = 1; i <= n; i++) {
        let [r, s] = input[i].split(" ");
        r = Number(r);

        let newstr = "";
        for (let ch of s) {
            for (let j = 0; j < r; j++) newstr += ch;
        }
        console.log(newstr);
    }
}

solution(input);