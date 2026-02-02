function solution(n, lost, reserve) {
    const std = new Array(n).fill(1);
    var answer = 0;
    
    lost.forEach((e, i) => std[e - 1]--);
    reserve.forEach((e, i) => std[e - 1]++);
    
    if (std[0] === 0 && std[1] === 2) {
        std[0]++;
        std[1]--;
    }
    
    if (std[n - 1] === 0 && std[n - 2] === 2) {
        std[n - 1]++;
        std[n - 2]--;
    }
    
    for (let i = 1; i < n - 1; i++) {
        if (std[i] === 0 && std[i - 1] === 2) {
            std[i - 1]--;
            std[i]++;
        }
        
        if (std[i] === 0 && std[i + 1] === 2) {
            std[i + 1]--;
            std[i]++;
        }
    }
    
    std.forEach((e, i) => {if (e > 0) answer++;})   
    return answer;
}