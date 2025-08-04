function solution(my_string, is_suffix) {
    let flag = 0;
    let idx = 0;
    
    while (1) {
        const find_idx = my_string.indexOf(is_suffix, idx)
        const suffix = my_string.slice(find_idx)    
        
        if (is_suffix === suffix) flag = 1
        if (find_idx === -1) break
        idx = find_idx + 1
        
    }
    
    return flag;
}