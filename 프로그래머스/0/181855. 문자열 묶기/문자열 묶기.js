function solution(strArr) {
    var strMap = new Map();
    
    strArr.forEach((e, _) => {
        const len = e.length;
        if (!strMap.get(len)) {
            strMap.set(len, 1);
        } else {
            strMap.set(len, strMap.get(len) + 1);   
        }
    })
    
    const max = Math.max(...strMap.values());
    
    return max;
}