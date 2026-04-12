/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const T = Number(input[0]);

    for (let i = 0; i < T; i++) {
        const N = Number(input[i + 1]);
        let cnt = 0;

        function BFS(k) {
            if (k > N) return 0;
            if (k === N) {
                return 1;
            }

            let cnt = 0;

            for (let i = 1; i <= 3; i++) {
                cnt += BFS(k + i);
            }

            return cnt;
        }
        console.log(BFS(0));
    }
}

solution(input);