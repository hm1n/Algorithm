function solution(todo_list, finished) {
    var answer = [];
    
    finished.forEach((e, i) => {
        if (!e) answer.push(todo_list[i])
    })
    return answer;
}