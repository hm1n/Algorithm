/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [M, N, H] = input[0].split(" ").map(Number);
    const arr = [];
    const tomato = [];

    const move = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [-1, 0, 0],
        [0, -1, 0],
        [0, 0, -1],
    ];
    const visited = Array.from({length: H}, () => Array.from({length: N}, () => new Array(M).fill(0)));
    const dist = Array.from({length: H}, () => Array.from({length: N}, () => new Array(M).fill(0)));

    let ans = 0;

    let line = 1;
    for (let i = 0; i < H; i++) {
        const floor = [];
        for (let j = 0; j < N; j++) {
            floor.push(input[line++].split(" ").map(Number));

            for (let k = 0; k < M; k++) {
                if (floor[j][k] === 1) {
                    tomato.push([i, j, k]);
                }
            }
        }
        arr.push([...floor]);
    }

    function BFS() {
        const Q = [];
        let head = 0;

        for (let [startH, startY, startX] of tomato) {
            Q.push([startH, startY, startX]);
            visited[startH][startY][startX] = 1;
        }

        while (head < Q.length) {
            const [h, y, x] = Q[head++];

            for (let [dh, dy, dx] of move) {
                if (0 <= h + dh && h + dh < H && 0 <= y + dy && y + dy < N && 0 <= x + dx && x + dx < M) {
                    if (!visited[h + dh][y + dy][x + dx] && arr[h + dh][y + dy][x + dx] === 0) {
                        Q.push([h + dh, y + dy, x + dx]);
                        visited[h + dh][y + dy][x + dx] = 1;
                        dist[h + dh][y + dy][x + dx] = dist[h][y][x] + 1;

                        if (ans < dist[h + dh][y + dy][x + dx]) {
                            ans = dist[h + dh][y + dy][x + dx];
                        }
                    }
                }
            }
        }
    }

    BFS();

    for (let i = 0; i < H; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < M; k++) {
                if (arr[i][j][k] !== -1 && !visited[i][j][k]) {
                    ans = -1;
                    break;
                }
            }
        }
    }

    console.log(ans);
}

solution(input);