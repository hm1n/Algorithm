/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);

    function recursion(str, l, r, cnt) {
        if (l >= r) {
            console.log(1, cnt);
            return;
        } else if (str[l] != str[r]) {
            console.log(0, cnt);
            return;
        } else return recursion(str, l + 1, r - 1, cnt + 1);
    }

    function isPalindrome(str) {
        return recursion(str, 0, str.length - 1, 1);
    }

    for (let i = 0; i < N; i++) {
        isPalindrome(input[1 + i]);
    }
}

solution(input);