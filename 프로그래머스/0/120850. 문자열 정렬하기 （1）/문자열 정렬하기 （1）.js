function solution(my_string) {
    const answer = [];
    for (let e of my_string) {
        if ('0' <= e && e <= '9') {
            answer.push(Number(e));
        }
    }
    answer.sort();
    return answer;
}