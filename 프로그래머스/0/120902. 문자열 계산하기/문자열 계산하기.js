function solution(my_string) {
    const arr = my_string.split(" ");
    let ans = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            ans += Number(arr[0]);
        } else if (i % 2 === 0) {
            if (arr[i - 1] === '-') {
                ans -= Number(arr[i]);
            } else {
                ans += Number(arr[i]);
            }
        }
    }
    
    return ans;
}