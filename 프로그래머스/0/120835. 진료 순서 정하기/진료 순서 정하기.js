function solution(emergency) {
    const rank = new Array(101).fill(0);
    const answer = [];
    
    const sorted = [...emergency];
    sorted.sort((a, b) => b - a);
    
    
    for (let i = 0; i < sorted.length; i++) {
        rank[sorted[i]] = i + 1;
    }
    
    for (let i = 0; i < emergency.length; i++) {
        if (rank[emergency[i]] > 0) {
            answer.push(rank[emergency[i]]);
        }
    }
    
    return answer;
}