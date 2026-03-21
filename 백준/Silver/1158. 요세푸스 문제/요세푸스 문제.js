/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    const arr = [];
    const ans = [];
    let idx = 0;
    let cnt = 1;

    for (let i = 1; i <= N; i++) arr.push(i);

    while (ans.length < N) {
        idx %= arr.length;

        if (cnt === K && arr[idx] > 0) {
            ans.push(arr[idx]);
            arr[idx] = 0;
            cnt = 1;
        }

        if (arr[idx] > 0) {
            cnt++;
        }

        idx++;
    }

    console.log(`<${ans.join(", ")}>`);
}

solution(input);