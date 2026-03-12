function solution(nums) {
    const len = nums.length;
    
    nums = [...new Set(nums)];
    
    return nums.length >= len / 2 ? len / 2 : nums.length;  
}