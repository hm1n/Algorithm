/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const arr = [];
    let ans = "";

    for (let i = 0; i < N; i++) {
        let [name, kor, eng, math] = input[1 + i].split(" ");
        arr.push({name, kor: Number(kor), eng: Number(eng), math: Number(math)});
    }

    arr.sort((a, b) => b.kor - a.kor || a.eng - b.eng || b.math - a.math || (a.name > b.name ? 1 : -1));

    for (let e of arr) {
        ans += `${e.name}\n`;
    }
    console.log(ans.trim());
}

solution(input);