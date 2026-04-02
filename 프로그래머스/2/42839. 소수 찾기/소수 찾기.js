function solution(numbers) {
    numbers = numbers.split("").map(Number).sort((a, b) => b - a);
    const N = Number(numbers.join(""));
    const isPrime = Array(N + 1).fill(1);
    let answer = 0;
    
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (isPrime[i]) {
            for (let j = 2; j * i <= N; j++) {
                isPrime[j * i] = 0;
            }
        }
    }
    
    function subset(n) {
        const map = new Map();
        
        for (let n of numbers) {
            if (map.get(n)) {
                map.set(n, map.get(n) + 1)
            } else {
                map.set(n, 1);
            }
        }
        
        for (let p of n.toString()) {
            if (!map.get(Number(p))) {
                return false;
            } else {
                map.set(Number(p), map.get(Number(p)) - 1);
            }
        }
        return true;
    }
    
    for (let i = 2; i <= N; i++) {
        if (isPrime[i] && subset(i)) {
            answer++;
        }
    } 
    
    return answer;
}