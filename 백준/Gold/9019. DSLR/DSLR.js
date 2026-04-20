/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = +input[0];
    let visited;
    let dist;

    function BFS(start, end) {
        const Q = [];
        let head = 0;

        Q.push(start);
        visited[start] = 1;

        while (head < Q.length) {
            const q = Q[head++];

            if (q === end) {
                return dist[end];
            }

            // D
            const D = (q * 2) % 10000;
            if (!visited[D]) {
                Q.push(D);
                visited[D] = 1;
                dist[D] = dist[q] + "D";
            }

            // S
            const S = q > 0 ? q - 1 : 9999;
            if (!visited[S]) {
                Q.push(S);
                visited[S] = 1;
                dist[S] = dist[q] + "S";
            }

            // L
            let L = q.toString().padStart(4, "0");
            L = Number(L.slice(1, 4) + L[0]);
            if (!visited[L]) {
                Q.push(L);
                visited[L] = 1;
                dist[L] = dist[q] + "L";
            }

            // R
            let R = q.toString().padStart(4, "0");
            R = Number(R[3] + R.slice(0, 3));
            if (!visited[R]) {
                Q.push(R);
                visited[R] = 1;
                dist[R] = dist[q] + "R";
            }
        }
    }

    const ans = [];
    for (let i = 0; i < T; i++) {
        const [A, B] = input[1 + i].split(" ").map(Number);

        visited = new Array(10000).fill(0);
        dist = new Array(10000).fill("");

        ans.push(BFS(A, B));
    }

    console.log(ans.join("\n"));
}

solution(input);