/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let str1 = input[0];
    const str2 = input[1];
    const len = str2.length;

    let cnt = 0;

    while (str1.length > 0) {
        if (str1.indexOf(str2) > -1) {
            cnt++;
            str1 = str1.slice(str1.indexOf(str2) + len);
        } else {
            break;
        }
    }
    console.log(cnt);
}

solution(input);