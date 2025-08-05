function solution(my_string) {
    var answer = [];
    
    for (let i = 65; i <= 90; i++) {
        const ch = String.fromCharCode(i)
        answer.push(my_string.split('').filter((e, _) => e === ch).length || 0)
    }
    
    for (let i = 97; i <= 122; i++) {
        const ch = String.fromCharCode(i)
        answer.push(my_string.split('').filter((e, _) => e === ch).length || 0)
    }
    
    return answer;
}