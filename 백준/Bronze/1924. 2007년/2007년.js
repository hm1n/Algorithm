/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [x, y] = input[0].split(" ").map(Number);

    const weekend = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let days = y;
    for (let i = 1; i < x; i++) {
        days += month[i];
    }

    if (days % 7 === 0) {
        console.log(weekend[6]);
    } else {
        console.log(weekend[(days % 7) - 1]);
    }
}

solution(input);