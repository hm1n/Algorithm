function solution(a, b) {
    var answer = 0;
    
    a = a.toString()
    b = b.toString()
    
    const ab = Number(a + b);
    const ba = Number(b + a);
    
    answer = ab > ba ? ab : ba;
    return answer;
}