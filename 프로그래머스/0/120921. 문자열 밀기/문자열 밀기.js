function solution(A, B) {
    const len = A.length;
    
    for (let i = 0; i < len; i++) {
        const str = A.slice(len - i, len) + A.slice(0, len - i);
        
        if (str === B) {
            return i;
        }
    }
    return -1;
}