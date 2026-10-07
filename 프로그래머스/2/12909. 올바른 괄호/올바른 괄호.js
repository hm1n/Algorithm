function solution(s){
    const S = [];
    let t = -1;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            S.push(s[i]);
            t++;
        } else {
            if (t === -1) {
                return false;
            }
            
            if (S[t] === ')') {
                return false;
            } else {
                S.pop();
                t--;
            }
        }
    }
    
    if (t > -1) return false;
    else return true;
}