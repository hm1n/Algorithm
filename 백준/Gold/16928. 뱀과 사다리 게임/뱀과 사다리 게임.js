/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const G = new Array(101).fill(0);
    const visited = new Array(101).fill(0);
    const dist = new Array(101).fill(0);

    let line = 1;
    for (let i = 0; i < N; i++) {
        const [start, end] = input[line++].split(" ").map(Number);
        G[start] = end;
    }
    for (let i = 0; i < M; i++) {
        const [start, end] = input[line++].split(" ").map(Number);
        G[start] = end;
    }

    function BFS(start) {
        const Q = [];
        let head = 0;

        Q.push(start);
        visited[start] = 1;

        while (head < Q.length) {
            let q = Q[head++];
            if (q === 100) return;

            for (let i = 1; i <= 6; i++) {
                let next = q + i;
                if (G[next] > 0) next = G[next];

                if (!visited[next] && next <= 100) {
                    Q.push(next);
                    visited[next] = 1;
                    dist[next] = dist[q] + 1;
                }
            }
        }
    }

    BFS(1);
    console.log(dist[100]);
}

solution(input);
