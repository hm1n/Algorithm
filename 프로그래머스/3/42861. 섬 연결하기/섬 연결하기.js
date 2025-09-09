function find(parent, v) {
    while (parent[v] !== v) {
        parent[v] = parent[parent[v]];
        v = parent[v];
    }
    return v;
}

function union(parent, a, b) {
    let ra = find(parent, a);
    let rb = find(parent, b);
    
    if (ra === rb) return false;
    
    if (ra < rb) {
        parent[rb] = parent[ra];
    } else {
        parent[ra] = parent[rb];
    }
    return true;
}

function solution(n, costs) {
    var answer = 0;
    var count = 0;
    var parent = [];
    
    costs.sort((a, b) => a[2] - b[2]);
    
    for (let i = 0; i < n; i++) {
        parent[i] = i;
    }
    
    for (let i = 0; i < costs.length && count < n - 1; i++){
        let [s1, s2, w] = costs[i];
        
        if (union(parent, s1, s2)) {
            answer += w;
            count++;
        }
    }
    
    
    return answer;
}