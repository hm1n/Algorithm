function solution(progresses, speeds) {
    var days = progresses.map((e, i) => Math.ceil((100 - e) / speeds[i]));
    var answer = [];
    
    var i = 0;
    var j = 0;
    var len = days.length
    
    while (i < len) {
        answer.push(1);
        j = i + 1;
        while (days[i] >= days[j]) {
            answer[answer.length - 1]++;
            j++;
        }
        i = j;
        console.log(answer);
    }
    
    return answer;
}