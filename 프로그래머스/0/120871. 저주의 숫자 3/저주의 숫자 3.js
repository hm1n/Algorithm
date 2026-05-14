function solution(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans++;
        while (ans % 3 === 0 || ans.toString().includes('3')) ans++;
    }
    return ans;
}