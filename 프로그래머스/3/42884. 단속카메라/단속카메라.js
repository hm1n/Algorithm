function solution(routes) {
    routes.sort((a, b) => a[0] - b[0]);
    
    const len = routes.length;
    const visited = new Array(len).fill(0);
    
    let answer = 0;
    
    for (let i = 0; i < len - 1; i++) {
        if (!visited[i]) {
            const [startA, endA] = routes[i];
            let minEnd = endA;
            
            visited[i] = 1;
            answer++;
            
            let j = i + 1;
            while (j < len && routes[j][0] <= minEnd) {
                visited[j] = 1;
                minEnd = Math.min(minEnd, routes[j][1]);
                j++;
            }
        }
    }
    
    if (!visited[len - 1]) answer++;
    
    return answer;
}