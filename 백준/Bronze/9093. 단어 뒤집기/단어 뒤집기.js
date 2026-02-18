/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);

    for (let i = 0; i < T; i++) {
        const str = input[1 + i].split(" ");
        const newStr = str.map((e) => {
            return e.split("").reverse().join("");
        });
        console.log(newStr.join(" "));
    }
}

solution(input);