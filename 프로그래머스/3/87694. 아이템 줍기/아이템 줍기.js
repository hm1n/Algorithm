function solution(rectangle, characterX, characterY, itemX, itemY) {
    const G = Array.from({length: 102}, () => new Array(102).fill(0));
    const visited = Array.from({length: 102}, () => new Array(102).fill(0));
    const distance = Array.from({length: 102}, () => new Array(102).fill(0));
    
    const Q = [];
    const move = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    for (let r of rectangle) {
        for (let i = 0; i < 4; i++) {
            r[i] *= 2;
        }
    }
    
    itemX *= 2;
    itemY *= 2;
    characterX *= 2;
    characterY *= 2;
    
    // 직사각형 테두리 따라 그래프 그리기
    for (let [x1, y1, x2, y2] of rectangle) {
        for (let x = x1; x < x2; x++) G[x][y1] = 1;
        for (let y = y1; y < y2; y++) G[x2][y] = 1;
        for (let x = x2; x > x1; x--) G[x][y2] = 1;
        for (let y = y2; y > y1; y--) G[x1][y] = 1;
    }
    
    // 가장 바깥쪽 테두리만 남기기
    for (let [x1, y1, x2, y2] of rectangle) {
        for (let x = x1 + 1; x < x2; x++) {
            for (let y = y1 + 1; y < y2; y++) {
                G[x][y] = 0;
            }
        }
    }

    
    // bfs
    Q.push([characterX, characterY]);
    visited[characterX][characterY] = 1;
    while (Q.length) {
        const [x, y] = Q.shift();
        
        if (x === itemX && y === itemY) break;
        
        for (let [mx, my] of move) {
            if (G[x + mx][y + my] && !visited[x + mx][y + my]) {
                visited[x + mx][y + my] = 1;
                distance[x + mx][y + my] = distance[x][y] + 1;
                Q.push([x + mx, y + my]);
            }
        }
    }
    return distance[itemX][itemY] / 2;
}