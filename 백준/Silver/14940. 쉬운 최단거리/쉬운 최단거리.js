/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = [];

    const move = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const visited = Array.from({length: N}, () => new Array(M).fill(0));
    const dist = Array.from({length: N}, () => new Array(M).fill(0));

    let y, x;

    for (let i = 0; i < N; i++) {
        arr.push(input[1 + i].split(" ").map(Number));
        for (let j = 0; j < M; j++) {
            if (arr[i][j] === 2) {
                y = i;
                x = j;
            }
        }
    }

    function BFS(startY, startX) {
        const Q = [];

        Q.push([startY, startX]);
        visited[startY][startX] = 1;

        while (Q.length) {
            const [y, x] = Q.shift();
            visited[y][x] = 1;

            for (let [dy, dx] of move) {
                if (0 <= x + dx && x + dx < M && 0 <= y + dy && y + dy < N) {
                    if (!visited[y + dy][x + dx] && arr[y + dy][x + dx]) {
                        Q.push([y + dy, x + dx]);
                        visited[y + dy][x + dx] = 1;
                        dist[y + dy][x + dx] = dist[y][x] + 1;
                    }
                }
            }
        }
    }

    BFS(y, x);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (arr[i][j] > 0 && !visited[i][j]) {
                dist[i][j] = -1;
            }
        }
    }

    console.log(dist.map((e) => e.join(" ")).join("\n"));
}

solution(input);