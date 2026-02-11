/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const hex = input[0].split("");

    let ans = 0;
    let pow = 1;
    for (let i = hex.length - 1; i >= 0; i--) {
        let num = pow;

        if ("0" <= hex[i] && hex[i] <= "9") num *= hex[i].charCodeAt() - "0".charCodeAt();
        if ("A" <= hex[i] && hex[i] <= "F") num *= hex[i].charCodeAt() - "A".charCodeAt() + 10;

        ans += num;
        pow *= 16;
    }

    console.log(ans);
}

solution(input);
