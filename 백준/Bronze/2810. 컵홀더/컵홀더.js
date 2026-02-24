/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const str = input[1].split("");
    let newStr = "";

    let cnt = 0;
    for (let i = 0; i < N; i++) {
        if (str[i] === "S") {
            newStr += "*S";
            cnt++;
        }
        if (str[i] === "L" && str[i + 1] === "L") {
            newStr += "*LL";
            cnt++;
            i++;
        }
    }
    newStr += "*";
    cnt++;

    N > cnt ? console.log(cnt) : console.log(N);
}

solution(input);