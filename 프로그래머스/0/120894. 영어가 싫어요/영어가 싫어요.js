function solution(numbers) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    let ans = '';
    let s = 0;
    
    for (let i = 1; i <= numbers.length; i++) {
        const tmp = numbers.slice(s, i);
        if (words.indexOf(tmp) > -1) {
            ans += words.indexOf(tmp);
            s = i;
        }
    }

    return Number(ans);
}