/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);
    const visited = new Array(N).fill(0);

    const ans = [];

    arr.sort((a, b) => a - b);

    function makeOrder(order, idx) {
        if (order.length === M) {
            ans.push(order.join(" "));
            return;
        }

        let prev;

        for (let i = idx; i < N; i++) {
            if (prev === arr[i]) continue;

            prev = arr[i];
            makeOrder([...order, arr[i]], i);
        }
    }

    makeOrder([], 0);
    console.log(ans.join("\n"));
}

solution(input);