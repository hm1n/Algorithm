function solution(num_list) {
    var answer = 0;
    
    const sum = num_list.reduce((s, e) => {
        return s + e;
    }, 0)
    
    const product = num_list.reduce((p, e) => {
        return p * e;
    }, 1)
    
    
    return product < sum ** 2 ? 1 : 0;
}