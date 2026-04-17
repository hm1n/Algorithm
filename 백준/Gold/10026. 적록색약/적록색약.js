/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const G = [];
    const BG = [];
    let visited = Array.from({length: N}, () => new Array(N).fill(0));
    const ans = [0, 0];

    for (let i = 0; i < N; i++) {
        G.push(input[1 + i]);
        BG.push([...G[i]]);

        for (let j = 0; j < N; j++) {
            if (BG[i][j] === "R") BG[i][j] = "G";
        }
    }

    function BFS(G, Y, X, color) {
        const Q = [];
        const move = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];

        let head = 0;

        Q.push([Y, X]);
        visited[Y][X] = 1;

        while (head < Q.length) {
            const [y, x] = Q[head++];

            for (let [dy, dx] of move) {
                const ny = y + dy;
                const nx = x + dx;

                if (0 <= ny && ny < N && 0 <= nx && nx < N) {
                    if (!visited[ny][nx] && G[ny][nx] === color) {
                        Q.push([ny, nx]);
                        visited[ny][nx] = 1;
                    }
                }
            }
        }
        return 1;
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                ans[0] += BFS(G, i, j, G[i][j]);
            }
        }
    }

    visited = Array.from({length: N}, () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j]) {
                ans[1] += BFS(BG, i, j, BG[i][j]);
            }
        }
    }

    console.log(ans.join(" "));
}

solution(input);