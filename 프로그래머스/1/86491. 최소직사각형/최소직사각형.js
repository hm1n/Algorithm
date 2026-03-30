function solution(sizes) {
    const w = [];
    const h = [];
    
    // maxW는 가로, 세로 둘 중 큰 값들만 모아놓은 값 중 최대값
    // maxH는 가로, 세로 둘 중 작은 값들만 모아놓은 값 중 최대값
    
    for (let i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            w.push(sizes[i][0]);
            h.push(sizes[i][1]);
        } else {
            w.push(sizes[i][1]);
            h.push(sizes[i][0]);
        }
    }
    
    return Math.max(...w) * Math.max(...h);
}