/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({length: N + 1}, () => []);
const visited = Array(N + 1).fill(false);
var cnt = 0;

function dfs(graph, visited, v) {
    if (visited[v]) return 0;

    visited[v] = true;

    for (let i = 0; i < graph[v].length; i++) {
        if (!visited[graph[v][i]]) dfs(graph, visited, graph[v][i]);
    }
    return 1;
}

for (let i = 1; i < input.length; i++) {
    const [u, v] = input[i].split(" ").map(Number);

    graph[u].push(v);
    graph[v].push(u);
}

for (let i = 1; i < graph.length; i++) {
    cnt += dfs(graph, visited, i);
}

console.log(cnt);
