function solution(arr) {
    var stk = [];
    let i = 0;
    let top = -1;
    
    while (i < arr.length) {
        if (top === -1) {
            stk.push(arr[i++]);
            top++;
        } else {
            if (stk[top] === arr[i]) {
                stk.pop();
                top--;
                i++;
            } else {
                stk.push(arr[i]);
                top++;
                i++;
            }
        }
    }
    return stk.length ? stk : [-1];
}