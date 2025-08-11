function solution(numbers, n) {
    var answer = 0;
    numbers.forEach((e, i) => {
        if (answer > n) return answer;
        answer += e;
    })
    return answer;
}