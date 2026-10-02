function solution(arr) {
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        const n = arr[i];
        while (n === arr[i + 1]) i++;
        answer.push(n);
    }
    
    return answer;
}