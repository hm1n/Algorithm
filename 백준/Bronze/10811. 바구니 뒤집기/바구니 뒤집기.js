/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const arr = [];

    for (let i = 1; i <= N; i++) arr.push(i);

    for (let k = 0; k < M; k++) {
        const [i, j] = input[1 + k].split(" ").map(Number);

        let p = i;
        let q = j;
        while (p < q) {
            [arr[p - 1], arr[q - 1]] = [arr[q - 1], arr[p - 1]];
            p++;
            q--;
        }
    }

    console.log(arr.join(" "));
}
solution(input);