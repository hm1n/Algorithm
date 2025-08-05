function solution(my_string, m, c) {
    var answer = '';
    var i = 0;
    while (i < my_string.length) {
        answer += my_string.slice(i, i + m).charAt(c - 1)
        i += m
    }
    return answer;
}