function solution(arr, n) {
    const len = arr.length;
    
    if (len % 2) {
        for (i = 0; i < len; i += 2) arr[i] += n;   
    } else {
        for (i = 1; i < len; i += 2) arr[i] += n;
    }
    
    return arr;
}