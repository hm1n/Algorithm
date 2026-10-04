function solution(nums) {
    const n = nums.length / 2;
    const m = [...new Set(nums)].length;
    
    return n < m ? n : m;
}