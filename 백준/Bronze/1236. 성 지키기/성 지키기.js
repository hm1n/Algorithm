/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);

    let row = 0;
    let col = 0;

    for (let i = 1; i <= N; i++) {
        let cnt = 0;
        for (let j = 0; j < M; j++) {
            if (input[i][j] === "X") cnt++;
        }
        if (cnt === 0) row++;
    }

    for (let j = 0; j < M; j++) {
        let cnt = 0;
        for (let i = 1; i <= N; i++) {
            if (input[i][j] === "X") cnt++;
        }
        if (cnt === 0) col++;
    }

    col > row ? console.log(col) : console.log(row);
}

solution(input);