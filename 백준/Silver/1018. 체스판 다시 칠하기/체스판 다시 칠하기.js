/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const chess = [];
    const diff = [];

    function calcDiff(chess, x, y) {
        let diff1 = 0;
        let diff2 = 0;
        let block1 = "B";
        let block2 = "W";

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (chess[x + i][y + j] !== block1) diff1++;
                block1 = block1 === "W" ? "B" : "W";
            }
            block1 = block1 === "W" ? "B" : "W";
        }

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (chess[x + i][y + j] !== block2) diff2++;
                block2 = block2 === "W" ? "B" : "W";
            }
            block2 = block2 === "W" ? "B" : "W";
        }

        return Math.min(diff1, diff2);
    }

    for (let i = 0; i < N; i++) {
        chess.push(input[1 + i]);
    }

    for (let i = 0; i <= N - 8; i++) {
        for (let j = 0; j <= M - 8; j++) {
            diff.push(calcDiff(chess, i, j));
        }
    }
    console.log(Math.min(...diff));
}

solution(input);