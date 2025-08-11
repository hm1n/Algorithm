function solution(arr) {
    const answer = [];
    
    arr.forEach((e, _) => {
        if (e >= 50 && !(e % 2)) {
            answer.push(e / 2);
        }
        else if (e < 50 && e % 2) {
            answer.push(e * 2);
        }
        else {
            answer.push(e);
        }
        
    })
    
    return answer;
}