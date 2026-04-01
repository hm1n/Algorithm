function solution(answers) {
    const arr = ['12345', '21232425', '3311224455'];
    const ans = [];
    
    function score(str) {
        let cnt = 0;
        
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].toString() === str[i % str.length]) {
                cnt++;
            }
        }
        return cnt;
    }
    
    let max = 0;
    for (let i = 1; i <= arr.length; i++) {
        if (max < score(arr[i - 1])) {
            max = score(arr[i - 1]);
        }
        ans.push([i, score(arr[i - 1])]);
    }
    
    return ans.filter(e => e[1] === max).map(e => e[0]);
}