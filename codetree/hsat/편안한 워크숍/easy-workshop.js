const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, k] = input[0].split(" ").map(Number);
let grid = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

// Please Write your code here.

const move = [[0, 1], [1, 0], [-1, 0], [0, -1]];

function findRoot(D) {
    const DP = Array.from({length: n}, () => Array(n).fill(0));

    function longest(x, y) {
        if (DP[y][x]) return DP[y][x];

        const cur = grid[y][x];
        let cnt = 1;

        for (let [dy, dx] of move) {
            const nx = x + dx;
            const ny = y + dy;

            if (0 <= nx && nx < n && 0 <= ny && ny < n) {
                const next = grid[ny][nx];
                if (cur < next && next - cur <= D) {
                    cnt = Math.max(cnt, 1 + longest(nx, ny));
                }
            }
        }

        DP[y][x] = cnt;
        return cnt;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (longest(j, i) >= k) return true;
        }
    }
    return false;
}

const flat = grid.flat();

let lo = 0;
let hi = Math.max(...flat) - Math.min(...flat);

if (!findRoot(hi)) {
    console.log(-1);
    return;
}

while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (findRoot(mid)) {
        hi = mid;
    } else {
        lo = mid + 1;
    }
}

console.log(hi);