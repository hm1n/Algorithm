function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;

    let start;
    let lever;
    let exit;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            if (maps[i][j] === 'L') lever = [i, j];
            if (maps[i][j] === 'E') exit = [i, j];
        }
    }

    function BFS(start, target) {
        const [startX, startY] = start;
        const [targetX, targetY] = target;

        const visited = Array.from({ length: N }, () => Array(M).fill(false));
        const queue = [[startX, startY, 0]];
        let head = 0;

        const move = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ];

        visited[startX][startY] = true;

        while (head < queue.length) {
            const [x, y, dist] = queue[head++];

            if (x === targetX && y === targetY) {
                return dist;
            }

            for (const [dx, dy] of move) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
                if (visited[nx][ny]) continue;
                if (maps[nx][ny] === 'X') continue;

                visited[nx][ny] = true;
                queue.push([nx, ny, dist + 1]);
            }
        }

        return -1;
    }

    const startToLever = BFS(start, lever);
    if (startToLever === -1) return -1;

    const leverToExit = BFS(lever, exit);
    if (leverToExit === -1) return -1;

    return startToLever + leverToExit;
}