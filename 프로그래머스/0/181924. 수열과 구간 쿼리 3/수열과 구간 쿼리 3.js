function solution(arr, queries) {
    for (let q of queries) {
        [arr[q[0]], arr[q[1]]] = [arr[q[1]], arr[q[0]]]
    }
    return arr;
}