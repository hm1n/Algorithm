function solution(n, lost, reserve) {
    const std = Array(n).fill(1);
    var answer = 0;
    
    lost.forEach((e) => std[e - 1]--)
    reserve.forEach((e) => std[e - 1]++)
    
    for (let i = 0; i < n; i++) {
        if (std[i] === 0 && std[i - 1] === 2) {
            std[i]++;
            std[i - 1]--;
        }
        else if (std[i] === 0 && std[i + 1] === 2) {
            std[i]++;
            std[i + 1]--;
        }
    }

    for (let keys of std) {
        if (keys) answer++;
    }
    
    return answer;
}