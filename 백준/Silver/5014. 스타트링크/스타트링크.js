/** @format */

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

const [F, S, G, U, D] = input[0].split(" ").map(Number);
const visited = Array(F + 1).fill(false);
const count = Array(F + 1).fill(0);
let answer = 0;

function bfs(start) {
    const queue = [];
    let head = 0;

    queue.push(start);
    visited[start] = true;

    while (head < queue.length) {
        const p = queue[head++];
        const move = [U, D * -1];

        if (p === G) {
            console.log(count[p]);
            return;
        }

        for (let m of move) {
            if (0 < p + m && p + m <= F && !visited[p + m]) {
                queue.push(p + m);
                visited[p + m] = true;
                count[p + m] = count[p] + 1;
            }
        }
    }

    console.log("use the stairs");
}

bfs(S);