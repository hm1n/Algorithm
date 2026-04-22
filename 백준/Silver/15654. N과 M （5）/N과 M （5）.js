/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    const ans = [];
    const visited = new Array(N + 1).fill(0);

    arr.sort((a, b) => a - b);

    function DFS(order) {
        if (order.length === M) {
            ans.push(order.join(" "));
            return;
        }
        for (let i = 0; i < N; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                DFS([...order, arr[i]]);
                visited[i] = 0;
            }
        }
    }

    DFS([]);
    console.log(ans.join("\n"));
}

solution(input);