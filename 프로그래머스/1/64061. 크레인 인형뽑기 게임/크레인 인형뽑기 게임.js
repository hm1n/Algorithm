function solution(board, moves) {
    var answer = 0;
    var stack = [];
    var top = -1;
    
    00000
    00103
    02501
    42442
    35131
    
    for (let m of moves) {
        
        for (let i = 0; i < board.length; i++) {
            // console.log(stack);
            if (board[i][m - 1] !== 0) {
                if (top > -1 && stack[top] === board[i][m - 1]) {
                    stack.pop();
                    top--;
                    board[i][m - 1] = 0;
                    answer += 2;
                } else {
                    stack.push(board[i][m - 1]);
                    top++;
                    board[i][m - 1] = 0;
                }
                break;
            }
        }
    }
    return answer;
}