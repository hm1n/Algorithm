/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const n = Number(input[0]);
const graph = [];
const visited = Array.from({length: n}, () => Array(n).fill(false));
const answer = [];
let dfsCount = 0;
let nodeCount = 0;

for (let i = 1; i < input.length; i++) {
    graph.push(input[i].split("").map(Number));
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (graph[i][j] && !visited[i][j]) {
            nodeCount = 0;
            dfsCount += dfs(i, j);
            answer.push(nodeCount);
        }
    }
}

console.log(dfsCount);
console.log(answer.sort((a, b) => a - b).join("\n"));

function dfs(x, y) {
    if (visited[x][y]) return;

    visited[x][y] = true;
    nodeCount++;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (0 <= nx && nx < n && 0 <= ny && ny < n) {
            if (graph[nx][ny] === 1 && !visited[nx][ny]) {
                dfs(nx, ny);
            }
        }
    }

    return 1;
}
