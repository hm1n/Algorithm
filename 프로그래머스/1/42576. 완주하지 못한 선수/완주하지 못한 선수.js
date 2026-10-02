function solution(participant, completion) {
    const map = new Map();
    
    for (let p of participant) {
        if (map.get(p) > 0) map.set(p, map.get(p) + 1);
        else map.set(p, 1);
    }
    
    for (let c of completion) {
        if (map.get(c) > 0) map.set(c, map.get(c) - 1);
        if (map.get(c) === 0) map.delete(c);
    }
    
    const keys = [...map.keys()]
    return keys[0];
}