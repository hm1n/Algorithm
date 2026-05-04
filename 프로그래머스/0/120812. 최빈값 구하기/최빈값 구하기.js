function solution(array) {
    let answer;
    const freq = new Array(1001).fill(0);
    
    for (let i = 0 ; i < array.length; i++) {
        freq[array[i]]++;
    }
    
    let max = 0;
    for (let i = 0; i < freq.length; i++) {
        if (freq[i] > freq[max]) max = i;
    }
    
    freq.sort((a, b) => b - a);
    answer = freq[0] === freq[1] ? -1 : max;
    
    return answer;
}