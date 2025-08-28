function solution(arr) {
    let len = arr.length;
    let answer = [...arr];
    let answer_len = 1;
    
    while (answer_len < len) {
        answer_len *= 2;
    }
    
    for (let i = 0; i < answer_len - len; i++) {
        answer.push(0);
    }
    
    return answer;
}