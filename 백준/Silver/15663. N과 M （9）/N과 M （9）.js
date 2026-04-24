/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    const visited = new Array(N).fill(0);
    const ans = [];

    arr.sort((a, b) => a - b);

    function makeOrder(order) {
        if (order.length === M) {
            ans.push(order.join(" "));
        }

        let prev;

        for (let i = 0; i < N; i++) {
            if (visited[i]) continue;

            // 같은 depth에서 동일한 숫자 선택 X
            if (prev === arr[i]) continue;

            prev = arr[i];

            visited[i] = 1;
            makeOrder([...order, arr[i]]);
            visited[i] = 0;
        }
    }

    makeOrder([], 0);
    console.log(ans.join("\n"));
}

solution(input);