/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    const N = +input[0];
    const tanghulu = input[1].split(" ").map(Number);
    const fruit = new Map();

    // 투 포인터
    // 과일 종류가 2개 이하면 오른쪽 포인터를 이동하며 개수 증가
    // 과일 종류가 3개가 되면 왼쪽 포인터를 이동하며 개수, 종류 감소
    // 위 과정을 반복하며 최대값 기록

    let max = 0;
    let l = 0;
    let r = 0;

    while (l <= r && l < N && r < N) {
        if (!fruit.has(tanghulu[r])) {
            fruit.set(tanghulu[r], 1);
        } else {
            fruit.set(tanghulu[r], fruit.get(tanghulu[r]) + 1);
        }

        while (fruit.size > 2) {
            fruit.set(tanghulu[l], fruit.get(tanghulu[l]) - 1);
            if (fruit.get(tanghulu[l]) === 0) {
                fruit.delete(tanghulu[l]);
            }

            l++;
        }
        cnt = r - l + 1;

        if (max < cnt) {
            max = cnt;
        }
        r++;
    }
    console.log(max);
}

solution(input);