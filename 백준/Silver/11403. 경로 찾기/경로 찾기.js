/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const G = [];
    const visited = Array.from({length: N}, () => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        G.push(input[1 + i].split(" ").map(Number));
    }

    function BFS(x) {
        const Q = [];
        const check = new Array(N).fill(0);
        let head = 0;

        Q.push(x);

        while (head < Q.length) {
            const q = Q[head++];

            for (i = 0; i < N; i++) {
                if (G[q][i] && !check[i]) {
                    Q.push(i);
                    check[i] = 1;
                    visited[x][i] = 1;
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        BFS(i);
    }

    console.log(visited.map((e) => e.join(" ")).join("\n"));
}

solution(input);