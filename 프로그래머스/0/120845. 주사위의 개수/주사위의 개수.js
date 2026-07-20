function solution(box, n) {
    let ans = 1;
    
    for (let b of box) {
        ans *= Math.floor(b / n);
    }
    
    return ans;
}