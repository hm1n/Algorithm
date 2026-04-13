/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const visited = new Array(N + 1).fill(0);
    const ans = [];

    function DFS(k, S, cnt) {
        if (cnt === M) {
            ans.push(S);
        }

        visited[k] = 1;

        for (let i = k + 1; i <= N; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                DFS(i, S + `${i} `, cnt + 1);
                visited[i] = 0;
            }
        }

        visited[k] = 0;
    }

    DFS(0, "", 0);
    console.log(ans.join("\n"));
}

solution(input);