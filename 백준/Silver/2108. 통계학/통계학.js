/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    const cnt = Array.from({length: 8001}, () => new Array(2).fill(0));

    for (let i = 0; i < N; i++) {
        arr.push(Number(input[1 + i]));
        cnt[arr[i] + 4000][0] = arr[i];
        cnt[arr[i] + 4000][1]++;
    }

    arr.sort((a, b) => a - b);
    cnt.sort((a, b) => b[1] - a[1]);

    let freq = cnt[0][1] > cnt[1][1] ? cnt[0][0] : cnt[1][0];

    console.log(Math.round(arr.reduce((pv, e) => pv + e) / N) || 0);
    console.log(arr[(N - 1) / 2]);
    console.log(freq);
    console.log(arr[N - 1] - arr[0]);
}

solution(input);