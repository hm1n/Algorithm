/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    const order = []
    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) order.push(matrix[top][j]);
        top++;

        for (let i = top; i <= bottom; i++) order.push(matrix[i][right]);
        right--;

        if (top <= bottom) {
            for (let j = right; j >= left; j--) {
                order.push(matrix[bottom][j]);
            }
            bottom--;
        }

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                order.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return order;
};