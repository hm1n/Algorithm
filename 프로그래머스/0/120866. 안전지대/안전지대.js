function solution(board) {
    const N = board.length;
    const danger = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [-1, -1],
        [-1, 1],
        [1, 1],
        [1, -1],  
    ];

    let answer = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 1) {            
                for (let [dx, dy] of danger) {
                    if (0 <= i + dx && i + dx < N && 0 <= j + dy && j + dy < N) {
                        if (board[i + dx][j + dy] === 0) {
                            board[i + dx][j + dy] = 2;   
                        }
                    }
                }
            }
        }
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (board[i][j] === 0) answer++;
        }
    }
    
    return answer;
}