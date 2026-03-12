function solution(clothes) {
    const map = new Map();
    
    clothes.forEach((e) => {
        if (map.get(e[1]) >= 1) {
            map.set(e[1], map.get(e[1]) + 1);
        } else {
            map.set(e[1], 1);
        }
    })
    
    return [...map.values()].reduce((a, b) => a * (b + 1), 1) - 1;
}