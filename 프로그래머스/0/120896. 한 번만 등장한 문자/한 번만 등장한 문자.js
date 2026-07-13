function solution(s) {
    const map = new Map();
    var answer = [];
    
    for (let ch of s) {
        if (map.has(ch)) {
            map.set(ch, map.get(ch) + 1)
        } else {
            map.set(ch, 1)
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            answer.push(s[i]);
        }
    }
    
    return answer.sort().join("");
}