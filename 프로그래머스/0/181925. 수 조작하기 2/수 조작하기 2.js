function solution(numLog) {
    var answer = '';
    let num = numLog[0]
    for (let i = 1; i < numLog.length; i++) {
        const tmp = numLog[i] - num;
        
        if (tmp == 1) {
            answer += 'w'
        } else if (tmp == -1) {
            answer += 's'
        } else if (tmp == 10) {
            answer += 'd'
        } else {
            answer +='a'
        }
        num = numLog[i]
    }
    return answer;
}