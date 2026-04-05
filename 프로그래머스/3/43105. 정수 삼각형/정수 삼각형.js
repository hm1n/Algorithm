function solution(triangle) {
    const H = triangle.length;
    const dp = Array.from({length: H}, () => new Array(H).fill(0));
    
    for (let i = 0; i < H; i++) {
        dp[H - 1][i] = triangle[H - 1][i]
    }
    
    for (let i = H - 2; i >= 0; i--) {
        for (let j = 0; j < H; j++) {
            dp[i][j] = triangle[i][j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
        }
    }

    return dp[0][0];
}