function solution(number) {
    var answer = 0;
    for (let n of number ) {
        answer += Number(n)
    }
    answer %= 9
    return answer;
}