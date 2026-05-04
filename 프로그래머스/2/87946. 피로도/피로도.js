function solution(k, dungeons) {
    var answer;
    
    const N = dungeons.length;
    const counts = [];
    const visited = new Array(N).fill(0);
    
    function calc(cnt, order, k) {
        if (cnt === N) {
            counts.push(cnt);
            return;
        }
        
        for (let i = 0; i < N; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = 1;
                calc(cnt + 1, order + i, k - dungeons[i][1]);
                visited[i] = 0;
            }
        }
        
        counts.push(cnt);
    }
    
    calc(0, '', k);
    counts.sort((a, b) => b - a);
    
    return counts[0];
}