function solution(array, n) {
    var answer = 0;
    
    array.sort((a, b) => b - a);
    
    for (let i = 0; i < array.length; i++) {
        if (Math.abs(n - array[answer]) >= Math.abs(n - array[i]))
            answer = i;
    }
    
    return array[answer];
}