function solution(arr, k) {
    let answer = [];
    let unique = [...new Set(arr)];
    let len = unique.length;
    
    for (let i = 0; i < k; i++) {
        if (i < len) {
            answer.push(unique[i]);   
        } else {
            answer.push(-1);
        }
    }
    
    return answer;
}