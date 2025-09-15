/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [N, K] = input[0].split(" ").map(Number);
const MAX = 100000;
const visited = Array(MAX + 1).fill(false);
const distance = Array(MAX + 1).fill(0);

function bfs(start) {
    const queue = [];
    let head = 0;

    queue.push(start);
    visited[start] = true;

    while (head < queue.length) {
        const p = queue[head++];
        const move = [1, -1, p];

        if (p === K) {
            console.log(distance[p]);
            return;
        }

        for (let m of move) {
            if (0 <= p + m && p + m <= MAX && !visited[p + m]) {
                queue.push(p + m);
                visited[p + m] = true;
                distance[p + m] = distance[p] + 1;
            }
        }
    }
}

bfs(N);