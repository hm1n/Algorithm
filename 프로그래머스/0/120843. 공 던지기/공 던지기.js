function solution(numbers, k) {
    const N = numbers.length;
    let idx = 0;
    let cnt = 1;
    
    while (cnt < k) {
        cnt++;
        idx = (idx + 2) % N;
    }
    
    return numbers[idx];
}