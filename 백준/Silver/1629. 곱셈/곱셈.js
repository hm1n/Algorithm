/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const [A, B, C] = input[0].split(" ").map(BigInt);

    function pow(N, P) {
        if (P === 1n) {
            return N % C;
        }

        const tmp = pow(N, P / 2n) % C;
        if (P % 2n === 1n) {
            return (tmp * tmp * N) % C;
        }
        return (tmp * tmp) % C;
    }

    console.log(pow(A, B).toString());
}

solution(input);