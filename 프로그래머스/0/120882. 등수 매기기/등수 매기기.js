function solution(score) {
    var answer = new Array(score.length).fill(1);
    const avg = [];
    
    let idx = 1;
    let prev = 0;
    
    for (let [a, b] of score) {
        avg.push((a + b) / 2);
    }
    
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (i !== j && avg[i] < avg[j]) answer[i]++;
        }
    }
    
    
    return answer;
}