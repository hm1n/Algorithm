/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const order = [];

    let x = 0, y = 0;
    let N = mat.length, M = mat[0].length;

    while (x < N && y < M) {
        if (0 <= x && x < N && 0 <= y && y < M) {
            order.push(mat[x][y])
            while (x - 1 >= 0 && y + 1 < M) {
                order.push(mat[--x][++y]);                
            } 
        }

        if (y + 1 < M) y++;
        else x++;

        if (0 <= x && x < N && 0 <= y && y < M) {
            order.push(mat[x][y]);
            while (x + 1 < N && y - 1 >= 0) {
                order.push(mat[++x][--y]);
            }
        }
        if (x + 1 < N) x++;
        else y++;
    }

    return order;
};