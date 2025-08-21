function solution(array, commands) {
    var answer = [];
    
    commands.forEach(([i, j, k], idx) => {
        var slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(slicedArray[k - 1]);
    })
    
    return answer;
}