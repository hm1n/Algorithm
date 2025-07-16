function solution(a, b) {
    var answer = 0;
    
    let ab = Number(a.toString() + b.toString())
    
    answer = ab >= 2 * a * b ? ab : 2 * a * b;

    return answer;
}