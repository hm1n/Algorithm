const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) graph[i].sort((x, y) => x - y);

const visitedD = Array(N + 1).fill(false);
const dfsOrder = [];
function dfs(u) {
  visitedD[u] = true;
  dfsOrder.push(u);
  for (const v of graph[u]) {
    if (!visitedD[v]) dfs(v);
  }
}

const visitedB = Array(N + 1).fill(false);
const bfsOrder = [];
function bfs(start) {
  const q = [start];
  visitedB[start] = true;
  for (let qi = 0; qi < q.length; qi++) {
    const u = q[qi];
    bfsOrder.push(u);
    for (const v of graph[u]) {
      if (!visitedB[v]) {
        visitedB[v] = true;
        q.push(v);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsOrder.join(" "));
console.log(bfsOrder.join(" "));