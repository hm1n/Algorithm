function solution(myString) {
    var answer = '';
    for (let ch of myString) {
        if (ch < 'l') answer += 'l';
        else answer += ch;
    }
    return answer;
}