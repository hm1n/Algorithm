function solution(n, computers) {
    var answer = 0;
    const graph = Array.from({length: n + 1}, () => []);
    const visited = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < computers[i].length; j++) {
            if (i !== j && computers[i][j]) {
                graph[i + 1].push(j + 1);
            }
        }
    }
    
    function dfs(v) {
        visited[v] = 1;

        for (let n of graph[v]) {
            if (!visited[n]) {
                dfs(n);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}
