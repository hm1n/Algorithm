function solution(n) {
    if (n <= 2) return n;
    
    let fact = 1;
    
    for (let i = 1; i <= n; i++) {
        if (fact * i > n)
            return i - 1;
        fact *= i;
    }
}