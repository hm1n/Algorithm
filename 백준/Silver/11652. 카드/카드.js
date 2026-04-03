/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const map = new Map();
    let max = 0;

    for (let i = 0; i < N; i++) {
        const n = input[1 + i];

        if (map.get(n)) {
            map.set(n, map.get(n) + 1);
        } else {
            map.set(n, 1);
        }

        if (map.get(n) > max) {
            max = map.get(n);
        }
    }

    const keys = [...map.keys()];
    keys.sort((a, b) => {
        const A = BigInt(a);
        const B = BigInt(b);

        return A > B ? 1 : A < B ? -1 : 0;
    });

    for (let k of keys) {
        if (map.get(k) === max) {
            console.log(k);
            break;
        }
    }
}

solution(input);