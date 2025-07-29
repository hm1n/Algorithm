function solution(arr, queries) {
    var answer = [];
    for (let [s, e, k] of queries) {
        const subArr = arr.slice(s, e + 1)
        
        const filtered = subArr.filter((num) => num > k)
        
        if (filtered.length === 0) {
            answer.push(-1)
        } else {
            answer.push(Math.min(...filtered))
        }
    }
    
    return answer
}