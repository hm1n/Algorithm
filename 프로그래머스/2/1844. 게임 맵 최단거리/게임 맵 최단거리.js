function solution(maps) {
    const Q = [];
    const move = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    
    const maxX = maps.length;
    const maxY = maps[0].length;
    const visited = Array.from({length: maxX}, () => new Array(maxY).fill(0));

    Q.push([0, 0]);

    while (Q.length) {
        const [x, y] = Q.shift();

        for (let m of move) {
            const dx = x + m[0];
            const dy = y + m[1];

            if (0 <= dx && dx < maxX && 0 <= dy && dy < maxY) {
                if (!visited[dx][dy] && maps[dx][dy]) {
                    Q.push([dx, dy]);
                    
                    visited[dx][dy] = 1;
                    maps[dx][dy] = maps[x][y] + 1;
                }
            }
        }
    }
    
    if (visited[maxX - 1][maxY - 1]) {
        return maps[maxX - 1][maxY - 1];
    } else {
        return -1;
    }
}
