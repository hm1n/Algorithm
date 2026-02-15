/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);

    let i = 1;

    let gcd;
    let lcm;

    while (true) {
        if (n % i === 0 && m % i === 0) gcd = i;
        if (i % n === 0 && i % m === 0 && !lcm) {
            lcm = i;
            break;
        }
        i++;
    }

    console.log(gcd);
    console.log(lcm);
}

solution(input);