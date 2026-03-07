/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    let sum = 0;
    let avg = 0;
    const GRADE = {
        "A+": 4.5,
        A0: 4.0,
        "B+": 3.5,
        B0: 3.0,
        "C+": 2.5,
        C0: 2.0,
        "D+": 1.5,
        D0: 1.0,
        F: 0.0,
    };

    for (let i = 0; i < input.length; i++) {
        const [lecture, credit, grade] = input[i].split(" ");

        if (grade !== "P") {
            sum += Number(credit);
            avg += GRADE[grade] * Number(credit);
        }
    }
    if (avg === 0 || sum === 0) {
        console.log("0.000000");
        return;
    } else {
        avg = avg / sum;
        console.log(Math.round(avg * 1000000) / 1000000);
    }
}

solution(input);