function solution(keyinput, board) {
    let x = 0, y = 0;
    
    const mx = Math.floor(board[0] / 2);
    const my = Math.floor(board[1] / 2);
    
    const move = {
        'left': [0, -1],
        'right': [0, 1],
        'up': [1, 0],
        'down': [-1, 0],
    };
    
    for (let m of keyinput) {
        const [dy, dx] = move[m];
        if (Math.abs(x + dx) <= mx) {
            x += dx;
        } 
        if (Math.abs(y + dy) <= my) {
            y += dy;
        } 
    }
    
    return [x, y];
}