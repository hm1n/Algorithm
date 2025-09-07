function solution(number, k) {    
    const N = number.length;
    let stack = [];
    let top = -1;
    let remove = k;
    
    for (let n of number) {
        while (top > -1 && remove > 0 && stack[top] < n) {
            stack.pop();
            top--;
            remove--;
        }
        
        stack.push(n);
        top++;
    }
    
    if (stack.length > N - k) {
        stack = stack.slice(0, N - k);
    }
    
    return stack.join('');
}