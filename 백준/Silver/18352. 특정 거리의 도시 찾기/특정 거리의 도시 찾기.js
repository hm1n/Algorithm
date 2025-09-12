/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [N, M, K, X] = input[0].split(" ").map(Number);
const graph = Array.from({length: N + 1}, () => []);
const answer = [];

class Deque {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    push(e) {
        this.queue[this.rear++] = e;
    }

    pop() {
        if (this.front === this.rear) return undefined;

        const e = this.queue[this.front];
        delete this.queue[this.front++];
        return e;
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
}

function bfs(graph, k, v) {
    const visited = Array(N + 1).fill(false);
    const queue = new Deque();

    queue.push([v, 0]);

    while (!queue.isEmpty()) {
        const [node, distance] = queue.pop();

        if (visited[node]) continue;

        if (distance === k) answer.push(node);

        visited[node] = true;

        for (let p of graph[node]) {
            if (!visited[p]) {
                queue.push([p, distance + 1]);
            }
        }
    }
}

bfs(graph, K, X);
answer.length ? console.log(answer.sort((a, b) => a - b).join("\n")) : console.log(-1);
