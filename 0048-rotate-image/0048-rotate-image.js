/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const L = matrix.length;

    for (let i = 0; i < Math.floor(L / 2); i++) {
        for (let j = 0; j < L; j++) {
            [matrix[i][j], matrix[L - i - 1][j]] = [matrix[L - i - 1][j], matrix[i][j]]
        }
    }

    for (let i = 0; i < L; i++) {
        for (let j = i; j < L; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; 
        }
    }
};