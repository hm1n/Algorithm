function solution(s){
    var stack = [];
    var top = -1;
    
    for (let ch of s) {
        if (ch === "\(") {
            stack.push(ch);
            top++;
        } else {
            if (top > -1 && stack[top] === '\(') {
                stack.pop();
                top--;
            } else {
                return false;
            }
        }
    }
    
    return top === -1 ? true : false;
}