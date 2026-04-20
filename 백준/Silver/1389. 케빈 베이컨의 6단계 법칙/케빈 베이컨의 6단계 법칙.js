/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const G = Array.from({length: N + 1}, () => []);

    for (let i = 0; i < M; i++) {
        const [a, b] = input[1 + i].split(" ").map(Number);

        G[a].push(b);
        G[b].push(a);
    }

    function BFS(s, visited, dist) {
        const Q = [];
        let head = 0;

        Q.push(s);
        visited[s] = 1;

        while (head < Q.length) {
            const q = Q[head++];

            for (let p of G[q]) {
                if (!visited[p]) {
                    Q.push(p);
                    visited[p] = 1;
                    dist[p] = dist[q] + 1;
                }
            }
        }
    }

    let min = Infinity;
    let idx = N;
    for (let i = 1; i <= N; i++) {
        const visited = new Array(N + 1).fill(0);
        const dist = new Array(N + 1).fill(0);

        BFS(i, visited, dist);

        const sum = dist.reduce((a, b) => a + b);

        if (min >= sum) {
            if (min === sum) {
                if (idx > i) {
                    min = sum;
                    idx = i;
                }
            } else {
                min = sum;
                idx = i;
            }
        }
    }
    console.log(idx);
}

solution(input);