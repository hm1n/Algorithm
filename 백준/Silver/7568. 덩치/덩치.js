/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    const ans = [];

    for (let i = 0; i < N; i++) {
        const [kg, cm] = input[1 + i].split(" ").map(Number);
        ans.push(1);
        arr.push({kg: kg, cm: cm});
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i].kg < arr[j].kg && arr[i].cm < arr[j].cm) ans[i]++;
        }
    }

    let tmp = "";
    ans.forEach((e) => {
        tmp += `${e} `;
    });
    console.log(tmp);
}

solution(input);