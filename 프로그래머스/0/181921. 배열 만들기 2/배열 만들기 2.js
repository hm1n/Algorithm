function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        const num = i.toString()
        let flag = 1;
        
        for (let j = 0; j < 10; j++) {
            if (j !== 0 && j !== 5 && num.includes(j.toString())) {
                flag = 0
                break
            }
        }
        
        if (flag === 1) answer.push(Number(num))
    }
    if (answer.length === 0) {
        answer.push(-1)
    }
    return answer;
}