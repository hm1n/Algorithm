/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let Y = matrix.length, X = matrix[0].length;

    let y = Y - 1, x = 0;
    let ans = true;

    if (X >= 1 && Y === 1) return true;
    if (Y >= 1 && X === 1) return true;

    for (let i = 0; i < Y + X; i++) {
       const n = matrix[y][x];

       let j = y, i = x;
       while (j + 1 < Y && i + 1 < X) {
            if (n !== matrix[++j][++i]) {
                ans = false;
                break;
            }
       }

       if (!ans) break;

       if (y - 1 >= 0) {
            y--;
        } else {
            x++;
        }
    }

    return ans;
};