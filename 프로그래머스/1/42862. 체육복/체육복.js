function solution(n, lost, reserve) {
    var answer = 0;
    const student = Array(n).fill(1);
    
    lost.forEach((e, i) => student[e - 1]--);
    reserve.forEach((e, i) => student[e - 1]++);
    
    for (let i = 0; i < n; i++) {
        if (student[i] === 0) {
            if (student[i - 1] === 2) {
                student[i - 1]--;
                student[i]++;
            } else if (student[i + 1] === 2) {
                student[i + 1]--;
                student[i]++;
            }
        }
    }
    
    student.forEach((e) => {if (e > 0) answer++;});
    return answer;
}