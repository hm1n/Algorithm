function solution(myString) {
    var answer = [];
    
    for (let ch of myString) {
        if (ch === 'a' || ch === 'A') answer.push('A');
        else answer.push(ch.toLowerCase());
    }
    
    return answer.join('');
}