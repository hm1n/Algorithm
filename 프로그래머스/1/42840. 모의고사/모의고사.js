function solution(answers) {
    const cnt = [0, 0, 0];
    const ans = [];
    
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === arr1[i % arr1.length]) cnt[0]++;
        if (answers[i] === arr2[i % arr2.length]) cnt[1]++;
        if (answers[i] === arr3[i % arr3.length]) cnt[2]++;
    }
    
    const max = Math.max(...cnt);
    for (let i = 0; i < 3; i++) {
        if (cnt[i] === max) {
            ans.push(i + 1);
        } 
    }
    
    return ans;
}