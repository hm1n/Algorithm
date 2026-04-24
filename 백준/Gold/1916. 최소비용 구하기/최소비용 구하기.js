/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    class Heap {
        constructor() {
            this.heap = [];
        }

        size() {
            return this.heap.length;
        }

        push(e) {
            this.heap.push(e);
            this.upHeap();
        }

        pop() {
            if (this.heap.length === 0) return;

            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            const root = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.downHeap();
            return root;
        }

        upHeap() {
            let leaf = this.heap.length - 1;
            let parent = Math.floor((leaf - 1) / 2);

            while (leaf > 0) {
                if (this.heap[parent][1] <= this.heap[leaf][1]) break;

                [this.heap[parent], this.heap[leaf]] = [this.heap[leaf], this.heap[parent]];
                leaf = parent;
                parent = Math.floor((leaf - 1) / 2);
            }
        }

        downHeap() {
            let root = 0;

            while (true) {
                let left = root * 2 + 1;
                let right = left + 1;
                let smaller = left;

                if (left >= this.heap.length) break;

                if (right < this.heap.length && this.heap[right][1] < this.heap[left][1]) {
                    smaller = right;
                }

                if (this.heap[root][1] <= this.heap[smaller][1]) break;

                [this.heap[root], this.heap[smaller]] = [this.heap[smaller], this.heap[root]];
                root = smaller;
            }
        }
    }

    const N = +input[0];
    const M = +input[1];

    const G = Array.from({length: N + 1}, () => []);
    const visited = new Array(N + 1).fill(0);
    const dist = new Array(N + 1).fill(Infinity);

    let line = 2;
    for (let i = 0; i < M; i++) {
        const [p, q, w] = input[line++].split(" ").map(Number);

        G[p].push([q, w]);
    }

    const [A, B] = input[line].split(" ").map(Number);

    function dijkstra() {
        const Q = new Heap();

        Q.push([A, 0]);
        visited[A] = 1;
        dist[A] = 0;

        while (Q.size()) {
            const [q, w] = Q.pop();

            if (q === B) {
                return w;
            }

            for (let [p, w] of G[q]) {
                if (!visited[p]) {
                    if (dist[q] + w < dist[p]) {
                        Q.push([p, dist[q] + w]);
                        dist[p] = dist[q] + w;
                    }
                }
            }
        }
    }

    console.log(dijkstra());
}

solution(input);