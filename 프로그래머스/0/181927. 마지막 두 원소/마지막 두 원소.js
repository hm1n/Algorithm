function solution(num_list) {
    var answer = num_list;
    
    const z = num_list[num_list.length - 1]
    const y = num_list[num_list.length - 2]
    if (z > y) {
        answer.push(z - y)
    } else {
        answer.push(z * 2)
    }
    return answer;
}