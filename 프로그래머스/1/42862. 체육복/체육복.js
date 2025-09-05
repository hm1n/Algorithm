function solution(n, lost, reserve) {
    const LOST = lost.length;
    const RESERVE = reserve.length;
    var std = Array(n).fill(1);
    var answer = LOST;

    for (let i = 0; i < LOST; i++) std[lost[i] - 1]--;
    for (let i = 0; i < RESERVE; i++) std[reserve[i] - 1]++;
    
    for (let i = 0; i < LOST; i++) {
        for (let  j = 0; j < RESERVE; j++) {
            if (lost[i] === reserve[j]) answer--;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (std[i] === 0) {
            if (i > 0 && std[i - 1] === 2) {
                answer--;
                std[i - 1]--;
                continue;
            }
            if (i < n - 1 && std[i + 1] === 2) {
                answer--;
                std[i + 1]--;
            }
        }
    }

    return n - answer;
}