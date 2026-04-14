/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);
    const ans = [];

    function findOrder(arr, N, k) {
        const Q = [];

        for (let i = 0; i < N; i++) {
            Q.push([arr[i], i]);
        }

        arr.sort((a, b) => a - b);

        let order = 0;
        while (Q.length) {
            while (Q[0][0] < arr[arr.length - 1]) {
                Q.push(Q.shift());
            }

            const [_, idx] = Q.shift();
            arr.pop();
            order++;

            if (idx === k) {
                return order;
            }
        }
    }

    let idx = 1;
    for (let i = 0; i < T; i++) {
        const [N, M] = input[idx++].split(" ").map(Number);
        const arr = input[idx++].split(" ").map(Number);

        ans.push(findOrder(arr, N, M));
    }

    console.log(ans.join("\n"));
}

solution(input);