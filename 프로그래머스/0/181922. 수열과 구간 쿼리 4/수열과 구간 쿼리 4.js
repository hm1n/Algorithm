function solution(arr, queries) {
    var answer = [];
    
    for (let [s, e, k] of queries) {
        for (i = s; i <= e; i++) {
            if (i % k == 0) {
                arr[i]++;
            }
        }
    }
    return arr;
}