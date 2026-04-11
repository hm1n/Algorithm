/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [A, P] = input[0].split(" ").map(Number);
    const set = new Set();

    function getNum(n) {
        const arr = n.toString().split("").map(Number);
        return arr.reduce((pv, e) => pv + e ** P, 0);
    }

    set.add(A);

    let D = getNum(A);
    while (!set.has(D)) {
        set.add(D);
        D = getNum(D);
    }

    const arr = [...set];
    console.log(arr.slice(0, arr.indexOf(D)).length);
}

solution(input);