function solution(numbers, target) {
    function calc(path, idx, sum) {
        if (path.length === numbers.length) {
            return sum === target ? 1 : 0;
        }
        
        return calc([...path, numbers[idx]], idx + 1, sum + numbers[idx]) + calc([...path, numbers[idx] * (-1)], idx + 1, sum - numbers[idx]);
    }
    
    return calc(new Array(0), 0, 0);
}