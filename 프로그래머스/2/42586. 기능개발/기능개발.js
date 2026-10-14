function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
    
    for (let i = 0; i < days.length; i++) {
        let cnt = 0;
        let j = i;
        while (days[i] >= days[j]) {
            j++;
            cnt++;
        }
        i = j - 1;
        answer.push(cnt);
    }
    
    return answer;
}