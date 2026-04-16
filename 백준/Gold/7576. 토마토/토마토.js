/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [M, N] = input[0].split(" ").map(Number);
    const arr = [];
    const tomato = [];

    const move = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const visited = Array.from({length: N}, () => new Array(M).fill(0));
    const dist = Array.from({length: N}, () => new Array(M).fill(0));

    let ans = 0;

    for (let i = 0; i < N; i++) {
        arr.push(input[1 + i].split(" ").map(Number));

        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 1) {
                tomato.push([i, j]);
            }
        }
    }

    function BFS() {
        const Q = [];
        let head = 0;

        for (let [startX, startY] of tomato) {
            Q.push([startX, startY]);
            visited[startX][startY] = 1;
        }

        while (head < Q.length) {
            const [y, x] = Q[head++];

            for (let [dy, dx] of move) {
                if (0 <= y + dy && y + dy < N && 0 <= x + dx && x + dx < M) {
                    if (!visited[y + dy][x + dx] && arr[y + dy][x + dx] === 0) {
                        Q.push([y + dy, x + dx]);
                        visited[y + dy][x + dx] = 1;
                        dist[y + dy][x + dx] = dist[y][x] + 1;

                        if (ans < dist[y + dy][x + dx]) {
                            ans = dist[y + dy][x + dx];
                        }
                    }
                }
            }
        }
    }

    BFS();

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] !== -1 && !visited[i][j]) {
                ans = -1;
            }
        }
    }

    console.log(ans);
}

solution(input);