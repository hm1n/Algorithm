function solution(common) {
    let d0 = common[1] - common[0];
    let d1 = common[2] - common[1];
    
    if (d0 === d1) 
        return common[common.length - 1] + d0;
    
    d0 = common[1] / common[0];
    return common[common.length - 1] * d0;
}