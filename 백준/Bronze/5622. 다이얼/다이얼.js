/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input[0].split("");

    let ans = 0;
    arr.forEach((e) => {
        if ("ABC".indexOf(e) > -1) ans += 3;
        if ("DEF".indexOf(e) > -1) ans += 4;
        if ("GHI".indexOf(e) > -1) ans += 5;
        if ("JKL".indexOf(e) > -1) ans += 6;
        if ("MNO".indexOf(e) > -1) ans += 7;
        if ("PQRS".indexOf(e) > -1) ans += 8;
        if ("TUV".indexOf(e) > -1) ans += 9;
        if ("WXYZ".indexOf(e) > -1) ans += 10;
    });
    console.log(ans);
}

solution(input);