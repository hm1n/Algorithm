function solution(n) {
    var answer = [];
    answer.push(n)
    
    let idx = 0
    while (answer[idx] !== 1) {
        if (answer[idx] % 2 === 0) {
            answer[idx + 1] = answer[idx] / 2
        } else {
            answer[idx + 1] = 3 * answer[idx] + 1
        }
        idx++
    }
    return answer;
}