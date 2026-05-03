function solution(my_str, n) {
    var answer = [];
    
    let str = '';
    let cnt = 0;
    for (let ch of my_str) {
        if (cnt === n) {
            answer.push(str);
            str = '';
            cnt = 0;
        }
        str += ch;
        cnt++;
    }
    
    answer.push(str);
    return answer;
}