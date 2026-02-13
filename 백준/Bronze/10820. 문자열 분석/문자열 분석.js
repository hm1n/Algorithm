/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").replace(/\r/g, "").split("\n");

if (input.length && input[input.length - 1] === "") input.pop();

function solution(input) {
    input.forEach((str) => {
        let a = 0;
        let A = 0;
        let n = 0;
        let s = 0;

        for (let e of str) {
            if ("a" <= e && e <= "z") a++;
            if ("A" <= e && e <= "Z") A++;
            if ("0" <= e && e <= "9") n++;
            if (e === " ") s++;
        }

        console.log(a, A, n, s);
    });
}

solution(input);