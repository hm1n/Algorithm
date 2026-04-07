/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const arr = [];
    const bingo = [];

    for (let i = 0; i < 5; i++) {
        arr.push(input[i].split(" ").map(Number));
    }
    for (let i = 5; i < 10; i++) {
        bingo.push(...input[i].split(" ").map(Number));
    }

    function find(n) {
        let x, y;
        for (y = 0; y < 5; y++) {
            for (x = 0; x < 5; x++) {
                if (arr[y][x] === n) {
                    arr[y][x] = "X";
                    return [y, x];
                }
            }
        }
    }

    const row = new Array(5).fill(0);
    const col = new Array(5).fill(0);
    const diagonal = [0, 0];

    let cnt = 0;
    let ans = 0;
    for (let b of bingo) {
        const [y, x] = find(b);
        let isLeftDiagonal = 0;
        let isRightDiagonal = 0;

        row[x]++;
        col[y]++;

        if (row[x] === 5) {
            cnt++;
            row[x] = -1;
        }
        if (col[y] === 5) {
            cnt++;
            col[y] = -1;
        }

        for (let i = 0; i < 5; i++) {
            if (x === i && y === i) {
                isLeftDiagonal = 1;
            }
            if (x === 4 - i && y === i) {
                isRightDiagonal = 1;
            }
        }

        if (isLeftDiagonal) diagonal[0]++;
        if (isRightDiagonal) diagonal[1]++;

        if (diagonal[0] === 5) {
            cnt++;
            diagonal[0] = -1;
        }
        if (diagonal[1] === 5) {
            cnt++;
            diagonal[1] = -1;
        }

        ans++;

        if (cnt >= 3) break;
    }

    console.log(ans);
}

solution(input);