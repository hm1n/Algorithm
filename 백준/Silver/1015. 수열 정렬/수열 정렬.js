/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number);
    const B = [];
    const P = [];
    const visited = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        A[i] = [A[i], i];
    }

    B.push(...A);
    B.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (A[i][0] === B[j][0] && !visited[j]) {
                P.push(j);
                visited[j] = 1;
                break;
            }
        }
    }

    console.log(P.join(" "));
}

solution(input);