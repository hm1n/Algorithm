/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = input[0].split("");

    let check = 0;
    let idx = 0;
    let ans;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "*") {
            idx = i;
        } else {
            if (i % 2 === 0) {
                check += +arr[i];
            } else {
                check += +arr[i] * 3;
            }
        }
        check %= 10;
    }

    for (let i = 0; i <= 9; i++) {
        let sum = check;

        if (idx % 2) sum += i * 3;
        else sum += i;

        sum %= 10;
        if (sum === 0) {
            ans = i;
        }
    }
    console.log(ans);
}

solution(input);