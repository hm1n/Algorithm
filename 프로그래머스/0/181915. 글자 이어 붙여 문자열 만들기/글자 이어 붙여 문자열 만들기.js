function solution(my_string, index_list) {
    var answer = '';
    for (let idx of index_list) {
        answer += my_string[idx]
    }
    return answer;
}