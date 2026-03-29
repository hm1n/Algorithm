/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    function gcd(a, b) {
        if (b === 0) {
            return a;
        }

        const r = a % b;
        return gcd(b, r);
    }

    for (let i = 1; i < input.length; i++) {
        const [n, ...arr] = input[i].split(" ").map(Number);

        let sum = 0;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                sum += gcd(arr[i], arr[j]);
            }
        }
        console.log(sum);
    }
}
solution(input);