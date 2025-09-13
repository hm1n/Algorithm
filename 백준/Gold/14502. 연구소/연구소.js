/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
let answer = 0;

for (let i = 1; i < input.length; i++) {
    const row = input[i].split(" ").map(Number);
    graph.push(row);
}

backTracking(0);
console.log(answer);

function backTracking(count) {
    if (count === 3) {
        answer = Math.max(answer, countSafeArea(bfs()));
        return;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 0) {
                graph[i][j] = 1;
                backTracking(count + 1);
                graph[i][j] = 0;
            }
        }
    }
}

function bfs() {
    const newGraph = JSON.parse(JSON.stringify(graph));
    const queue = [];
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let front = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (newGraph[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    while (front < queue.length) {
        const [x, y] = queue[front++];

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                if (newGraph[nx][ny] === 0) {
                    newGraph[nx][ny] = 2;
                    queue.push([nx, ny]);
                }
            }
        }
    }
    return newGraph;
}

function countSafeArea(graph) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (graph[i][j] === 0) count++;
        }
    }
    return count;
}