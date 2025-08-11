function solution(num_list) {
    const even = num_list.filter((_, i) => i % 2 === 0).reduce((a, b) => a + b);
    const odd = num_list.filter((_, i) => i % 2 === 1).reduce((a, b) => a + b);
    
    return even < odd ? odd : even;
}