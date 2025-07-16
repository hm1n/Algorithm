function solution(n) {
    var answer = 0;
    if (n % 2 == 1) {
        for (i = 1; i <= n; i += 2) {
                answer += i;
        }
    } else {
        for (i = 0; i <= n; i += 2) {
            answer += i * i;
        }
    }
    return answer;
}