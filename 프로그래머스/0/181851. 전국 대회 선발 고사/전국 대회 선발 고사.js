function solution(rank, attendance) {
    const rankMap = new Map();
    
    rank.forEach((e, i) => {
        if (attendance[i]) {
            rankMap.set(e, i);
        }
    })
    
    const winner = [...rankMap.entries()].sort((a, b) => a[0] - b[0]).slice(0, 3);
    console.log(winner)
    return 10000 * winner[0][1] + 100 * winner[1][1] + winner[2][1];
}