/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const ans = [];
    const visited = new Array(N + 1).fill(0);

    function DFS(arr, k) {
        if (arr.length === M) {
            ans.push(arr.join(" "));
            return;
        }
        for (let i = k; i <= N; i++) {
            DFS([...arr, i], i);
        }
    }

    for (let k = 1; k <= N; k++) {
        DFS([k], k);
    }
    console.log(ans.join("\n"));
}

solution(input);