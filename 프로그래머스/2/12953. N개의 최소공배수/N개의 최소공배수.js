function solution(arr) {
    arr.sort((a, b) => b - a);
    
    let t = arr[0];
    while (true) {
        let isLCM = true;
        
        for (let n of arr) {
            if (t % n !== 0) {
                isLCM = false;
                break;
            }
        }
        
        if (isLCM) break;
        t++;
    }
    
    return t;
}