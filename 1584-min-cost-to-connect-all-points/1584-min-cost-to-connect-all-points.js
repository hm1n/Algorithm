/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    /**
    1. 모든 정점 간선으로 연결하고 비용 순으로 정렬하기
    2. 시작점 한개 정해서 크루스칼 알고리즘으로 정점 잇기
        - 정점을 이을 때 그래프인지 판별
        - 만약 두 정점의 루트 노드가 같다면 두 정점을 이으면 그래프가 됨
        - 따라서 정점의 루트 노드를 저장하고 판별
    */
    const edges = [];

    // 모든 정점으로 간선 생성
    for (let i = 0; i < points.length; i++) {
        const [y, x] = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const [ny, nx] = points[j];
            const w = Math.abs(ny - y) + Math.abs(nx - x);
            edges.push([i, j, w]);
        }
    }

    const root = Array.from({length: points.length}, (_, i) => i);
    
    // 경로 압축
    function find(v) {
        if (root[v] !== v) root[v] = find(root[v]);
        return root[v];
    }

    function union(a, b) {
        const ra = find(a);
        const rb = find(b);

        if (ra === rb) return false;
        root[rb] = ra;
        return true;
    }
    
    // 가중치 순으로 정렬
    edges.sort((a, b) => a[2] - b[2]);

    let val = 0;
    let cnt = 0;

    for (let [i, j, w] of edges) {
        if (union(i, j)) {
            val += w;
            if (++cnt === points.length - 1) break;
        }
    }

    return val;
};