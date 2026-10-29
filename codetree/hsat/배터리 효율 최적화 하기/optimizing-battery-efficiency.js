const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= n; i++) {
    board.push(input[i].split(" ").map(Number));
}

// 1. 5개를 고르는 모든 경우의 수 탐색
let set = new Set();
const S = [];
const move = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const visited = Array.from({length: n}, () => new Array(m).fill(0));

function DFS(arr, sum) {
    if (arr.length >= 5) {
        const str = arr.map((e) => e[0] * m + e[1]).sort().join(',');
        if (!set.has(str)) {
            set.add(str);
            S.push(sum);
        }
        return;
    }

    for (let [x, y] of arr) {
        for (let [dx, dy] of move) {
            const nx = x + dx;
            const ny = y + dy;

            if (0 <= nx && nx < n && 0 <= ny && ny < m) {
                if (!visited[nx][ny]) {
                    visited[nx][ny] = 1;
                    DFS([...arr, [nx, ny]], sum + board[nx][ny]);
                    visited[nx][ny] = 0;
                }
            }
        }
    }
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (!visited[i][j]) {
            visited[i][j] = 1;
            DFS([[i, j]], board[i][j]);
            visited[i][j] = 0;
        }
    }
}

// 2. 겹치는 칸이 2개인 경우를 확인
function checkModule(arr1, arr2) {
    let cnt = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (arr1[i] === arr2[j]) {
                cnt++;
            }
        }
    }

    if (cnt === 2) {
        return true;
    }
    return false;
}


// 3. 겹치는 칸이 2개인 경로 합의 최댓값 계산 
let ans = -Infinity;

set = [...set];
for (let i = 0; i < set.length; i++) {
    set[i] = set[i].split(',').map((e) => Number(e));
}

for (let i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
        if (checkModule(set[i], set[j])) {
            if (ans < S[i] + S[j]) {
                ans = S[i] + S[j];
            }
        }
    }
}

console.log(ans);

