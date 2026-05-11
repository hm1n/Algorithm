function solution(num, total) {
    const avg = Math.floor(total / num);
    const answer = new Array(num).fill(avg);
    
    if (num % 2 === 1) {
        const mid = Math.floor(num / 2);
        for (let i = 1; i <= Math.floor(num / 2); i++) {
            answer[mid - i] = avg - i;
            answer[mid + i] = avg + i;
        }
    } else {
        const mid = num / 2;
        for (let i = 0; i < mid; i++) {
            answer[mid - i - 1] = avg - i;
            answer[mid + i] = avg + i + 1;
        }
        
        
    }
    return answer;
}


