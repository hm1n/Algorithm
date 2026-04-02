function solution(numbers, target) {
    var answer = 0;
    
    function dfs(numbers, idx, sum) {
        if (idx === numbers.length) {
            return sum === target ? 1 : 0;
        }
        
        return dfs(numbers, idx + 1, sum + numbers[idx]) + dfs(numbers, idx + 1, sum - numbers[idx]);
    }
    
    answer = dfs(numbers, 0, 0, 0);
    
    
    return answer;
}