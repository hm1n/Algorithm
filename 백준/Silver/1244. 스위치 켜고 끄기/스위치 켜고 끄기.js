/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = Number(input[0]);
    const switchs = [0, ...input[1].split(" ").map(Number)];
    let ans = "";

    function changeMale(n) {
        for (let i = 1; i <= N; i++) {
            if (i % n === 0) {
                switchs[i] = switchs[i] ? 0 : 1;
            }
        }
    }

    function changeFemale(n) {
        let i = n;
        let j = n;

        while (switchs[i + 1] === switchs[j - 1] && i + 1 <= N && j - 1 > 0) {
            i++;
            j--;
        }

        for (let k = j; k <= i; k++) {
            switchs[k] = switchs[k] ? 0 : 1;
        }
    }

    for (let i = 3; i < input.length; i++) {
        const [g, n] = input[i].split(" ").map(Number);
        if (g === 1) {
            changeMale(n);
        } else {
            changeFemale(n);
        }
    }

    for (let i = 1; i <= N; i++) {
        ans += `${switchs[i]} `;
        if (i % 20 === 0) ans += `\n`;
    }
    console.log(ans);
}
solution(input);