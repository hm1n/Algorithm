function solution(begin, target, words) {
    // 조건에 맞게 그래프 생성
    const graph = new Map();
    const len = begin.length;
    
    words.push(begin);
    
    // 0. 조건 판별 함수 (스펠링이 1개만 다른 경우)
    function isConnected(begin, target) {
        let cnt = 0;
        
        for (let i = 0; i < len; i++) {
            if (begin[i] === target[i]) cnt++;    
        }
        
        return (len - cnt) === 1 ? 1 : 0;
    }
    
    // 1. 그래프 초기화
    for (let w of words) {
        graph.set(w, []);
    }
    
    // 2. 그래프 업데이트
    const N = words.length;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (isConnected(words[i], words[j])) {
                graph.get(words[i]).push(j);
                graph.get(words[j]).push(i);
            }
        }
    }
    
    // 그래프 기반으로 BFS
    const visited = new Array(N).fill(0);
    const distance = new Array(N).fill(0);
    const queue = [];
    
    queue.push(N - 1);
    visited[N - 1] = 1;
    
    while (queue.length) {
        const idx = queue.shift();
        
        if (words[idx] === target) break;
        
        for (let next of graph.get(words[idx])) {
            if (!visited[next]) {
                queue.push(next);
                distance[next] = distance[idx] + 1;
                visited[next] = 1;
            }
        }
    }
    
    for (let i = 0; i < N; i++) {
        if (words[i] === target) {
            return distance[i];
        }
    }
    return 0;
}