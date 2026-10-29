function solution(n, times) {
    var answer = 0;
    
    let l = 1;
    let r = times.sort((a, b) => b - a)[0] * n;
    
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        let cnt = 0;
        
        for (let t of times) {
            cnt += Math.floor((mid / t));    
        }
        
        if (cnt >= n) {
            answer = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return answer;
}