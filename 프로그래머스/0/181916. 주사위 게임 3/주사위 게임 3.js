function solution(a, b, c, d) {
    const dices = [a, b, c, d];
    const diceCount = dices.reduce((map, dice) => {
        map.set(dice, (map.get(dice) || 0) + 1);
        return map;
    }, new Map());
    
    const keys = [...diceCount.keys()]
    const counts = [...diceCount.values()]
    
    if (counts.includes(4)) {
        return a * 1111;
    }
    
    if (counts.includes(3)) {
        const p = keys.find(k => diceCount.get(k) === 3);
        const q = keys.find(k => diceCount.get(k) === 1);
        return (10 * p + q) ** 2;
    }
    
    if (counts.filter(k => k === 2).length === 2) {
        const [p, q] = keys;
        return (p + q) * Math.abs(p - q);
    }
    
    if (counts.includes(2)) {
        if (counts.includes(1)) {
            const [q, r] = keys.filter(k => diceCount.get(k) === 1);
            return q * r;
        } else {
            const [p, q] = keys;
            return (p + q) * Math.abs(p - q);   
        }
    }
    
    return Math.min(...keys)
}