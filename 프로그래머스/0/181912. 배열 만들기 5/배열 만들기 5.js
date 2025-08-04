function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (let str of intStrs) {
        const num = Number(str.slice(s, s + l))
        if (num > k) {
            answer.push(num)   
        }
    }
    return answer;
}