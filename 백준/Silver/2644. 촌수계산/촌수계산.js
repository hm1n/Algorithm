/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const N = Number(input[0]);
const [X, Y] = input[1].split(" ").map(Number);
const M = Number(input[2]);
const graph = Array.from({length: N + 1}, () => []);
const visited = Array(N + 1).fill(false);
const distance = Array(N + 1).fill(0);

for (let i = 3; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map(Number);

    graph[x].push(y);
    graph[y].push(x);
}

graph.forEach((e, _) => e.sort((a, b) => a - b));

bfs();
distance[Y] ? console.log(distance[Y]) : console.log(-1);

function bfs() {
    const queue = [];
    let head = 0;

    queue.push(X);
    visited[X] = true;

    while (head < queue.length) {
        const p = queue[head++];

        if (p === Y) return;

        for (let node of graph[p]) {
            if (!visited[node]) {
                queue.push(node);
                visited[node] = true;
                distance[node] = distance[p] + 1;
            }
        }
    }
}