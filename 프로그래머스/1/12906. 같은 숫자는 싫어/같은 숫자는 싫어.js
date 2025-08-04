function solution(arr) {
    var answer = [];
    
    var i = 0;
    var j = 0;
    
    while (i < arr.length) {
        answer.push(arr[i]);
        while (answer[j] === arr[i]) {
            i++;
        }
        j++;
    }
    
    return answer;
}