function solution(numbers, target) {
    function calc(i, sum) {
        if (i === numbers.length) {
            return sum === target ? 1 : 0;
        }
        
        return calc(i + 1, sum + numbers[i]) + calc(i + 1, sum - numbers[i]);
    }
    
    return calc(0, 0);
}