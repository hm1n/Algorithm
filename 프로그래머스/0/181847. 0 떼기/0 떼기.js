function solution(n_str) {
    var arr = n_str.split('');
    var idx = 0;
    while (arr[idx] === '0') idx++;
    return arr.slice(idx).join('');
}