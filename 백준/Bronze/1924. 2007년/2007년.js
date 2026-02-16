/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [x, y] = input[0].split(" ").map(Number);

    const weekend = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let days = y;
    for (let i = 1; i < x; i++) {
        days += month[i];
    }

    console.log(weekend[days % 7]);
}

solution(input);