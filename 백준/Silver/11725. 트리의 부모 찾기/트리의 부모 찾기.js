/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = +input[0];
    const G = Array.from({length: N + 1}, () => []);
    const parent = new Array(N + 1).fill(0);

    for (let i = 0; i < N - 1; i++) {
        const [p, q] = input[1 + i].split(" ").map(Number);
        G[p].push(q);
        G[q].push(p);
    }

    function findParent() {
        const Q = [];
        let head = 0;

        Q.push(1);

        while (head < Q.length) {
            const q = Q[head++];

            if (G[q].length) {
                for (let p of G[q]) {
                    if (!parent[p]) {
                        parent[p] = q;
                        Q.push(p);
                    }
                }
            }
        }
    }

    findParent();
    console.log(parent.slice(2).join("\n"));
}

solution(input);