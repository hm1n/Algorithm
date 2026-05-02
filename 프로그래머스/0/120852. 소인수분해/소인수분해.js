function solution(n) {
    var answer = [];
    const primes = new Array(n + 1).fill(1);
    
    primes[1] = 0;
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        let j = 2;
        while (i * j <= n) {
            primes[i * j] = 0;
            j++;
        }
    }
    
    for (let i = 2; i <= n; i++) {
        if (primes[i] && n % i === 0) {
            answer.push(i);
        }
    }
     
    return answer;
}