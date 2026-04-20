/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = [];

    const tetro = [
        [
            [0, 1],
            [0, 2],
            [0, 3],
        ],
        [
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [1, 0],
            [2, 0],
            [2, 1],
        ],
        [
            [1, 0],
            [1, 1],
            [2, 1],
        ],
        [
            [0, 1],
            [1, 1],
            [0, 2],
        ],
    ];

    const sign = [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
    ];

    const rTetro = [];
    for (let t of tetro) {
        const nt = [];
        for (let [ty, tx] of t) {
            nt.push([tx, ty]);
        }
        rTetro.push(nt);
    }
    tetro.push(...rTetro);

    function calc(i, j, t, s) {
        let sum = arr[i][j];

        for (let [dy, dx] of t) {
            const ny = i + dy * s[0];
            const nx = j + dx * s[1];

            if (0 <= ny && ny < N && 0 <= nx && nx < M) {
                sum += arr[ny][nx];
            } else {
                return -1;
            }
        }
        return sum;
    }

    for (let i = 0; i < N; i++) {
        arr.push(input[1 + i].split(" ").map(Number));
    }

    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let t of tetro) {
                for (let s of sign) {
                    let sum = calc(i, j, t, s);
                    if (sum > max) max = sum;
                }
            }
        }
    }
    console.log(max);
}

solution(input);