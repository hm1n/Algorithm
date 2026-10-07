function solution(n, lost, reserve) {
    const std = new Array(n + 1).fill(1);
    
    for (let l of lost) std[l]--;
    for (let r of reserve) std[r]++;
    
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            if (std[i] === 2 && std[i - 1] === 0) {
                std[i]--;
                std[i - 1]++;
            }
        } 
        
        if (i < n) {
            if (std[i] === 2 && std[i + 1] === 0) {
                std[i]--;
                std[i + 1]++;
            }
        }
    }
    
    let cnt = 0;
    
    for (let i = 1; i <= n; i++) {
        if (std[i] > 0) cnt++;
    }
    
    return cnt;
}