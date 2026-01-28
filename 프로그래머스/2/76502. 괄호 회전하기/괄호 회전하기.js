function solution(s) {
    var answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        const rotate = s.slice(i) + s.slice(0, i);
        answer += checkString(rotate);
    }
    return answer;
}

function checkString(s) {
    var stack = [];
    var top = -1;
    
    for (let ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
            top++;
        } else {
            if (top === -1) return 0;
            
            const sum = stack[top] + ch;
            if (sum === '()' || sum === '[]' || sum === '{}') {
                stack.pop();
                top--;
            } else {
                return 0;
            }
        }
    }
    
    if (top === -1) return 1;
    else return 0;
}