function solution(players, callings) {
    const map = new Map();
    
    for (let i = 0; i < players.length; i++) {
        map.set(players[i], i);
    }
    
    
    for (let c of callings) {
        const i = map.get(c);
        
        [players[i], players[i - 1]] = [players[i - 1], players[i]];
        
        map.set(players[i - 1], i - 1)
        map.set(players[i], i);
    }
    
    return players;
}