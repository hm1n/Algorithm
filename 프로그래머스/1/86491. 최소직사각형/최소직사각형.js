function solution(sizes) {
    for (let i = 0; i < sizes.length; i++){
        if (sizes[i][0] > sizes[i][1]) {
            [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]];
        }
    }
    
    const w = Math.max(...sizes.map((e) => e[0]))
    const h = Math.max(...sizes.map((e) => e[1]))
    return w * h;
}