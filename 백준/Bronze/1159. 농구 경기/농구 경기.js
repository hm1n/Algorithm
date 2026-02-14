/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const map = new Map([]);

    for (let i = 0; i < N; i++) {
        const name = input[1 + i];

        if (!map.get(name[0])) {
            map.set(name[0], 1);
        } else {
            map.set(name[0], map.get(name[0]) + 1);
        }
    }

    const ans = [];

    map.forEach((v, k) => {
        if (v >= 5) {
            ans.push(k);
        }
    });

    ans.sort();

    ans.length === 0 ? console.log("PREDAJA") : console.log(ans.join(""));
}

solution(input);