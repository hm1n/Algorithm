function solution(myString, pat) {
    let cnt = 0;
    let idx = 0;
    
    while (myString.indexOf(pat, idx) !== -1 || idx >= myString.length) {
        idx = myString.indexOf(pat, idx) + 1;
        cnt++;
    }
    return cnt;
}