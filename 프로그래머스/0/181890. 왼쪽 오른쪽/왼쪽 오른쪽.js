function solution(str_list) {
    const leftIndex = str_list.indexOf('l');
    const rightIndex = str_list.indexOf('r');
    
    // l, r 모두 없는 경우 빈 배열 return
    if (leftIndex === -1 && rightIndex === -1) return [];

    // l만 없는 경우 r 오른쪽 배열 return
    if (leftIndex === -1) return str_list.slice(rightIndex + 1);
    
    // r만 없는 경우 l 왼쪽 배열 return
    if (rightIndex === -1) return str_list.slice(0, leftIndex);
    
    
    // l, r 모두 있는 경우 대소에 따라 return
    if (leftIndex < rightIndex) {
        return str_list.slice(0, leftIndex);
    }
    if (rightIndex < leftIndex) {
        return str_list.slice(rightIndex + 1);
    }
    
    return [];
    
}