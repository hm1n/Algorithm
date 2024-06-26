import java.util.ArrayList;
import java.util.Scanner;

class Edge {

    private int nodeA;
    private int nodeB;

    public Edge(int nodeA, int nodeB) {
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }

    public int getNodeA() {
        return this.nodeA;
    }

    public int getNodeB() {
        return this.nodeB;
    }
}

// 최소 신장 트리의 간선 개수 출력
public class Main {
    public static int[] parent = new int[1001];
    public static ArrayList<Edge> edges = new ArrayList<>();

    public static int findParent(int x) {
        if (x == parent[x])
            return x;
        return parent[x] = findParent(parent[x]);
    }

    public static void unionParent(int a, int b) {
        a = findParent(a);
        b = findParent(b);
        if (a < b)
            parent[b] = a;
        else
            parent[a] = b;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t, n, m, cnt;

        t = sc.nextInt();
        for (int i = 0; i < t; i++) {
            n = sc.nextInt();
            m = sc.nextInt();
            cnt = 0;

            // 부모 노드 자기 자신으로 초기화
            for (int j = 1; j <= n; j++) {
                parent[j] = j;
            }

            // 간선 정보 입력받아 저장
            for (int j = 0; j < m; j++) {
                int a = sc.nextInt();
                int b = sc.nextInt();
                edges.add(new Edge(a, b));
            }

            // 최소 신장 트리의 간선 개수 카운트
            for (int j = 0; j < edges.size(); j++) {
                int a = edges.get(j).getNodeA();
                int b = edges.get(j).getNodeB();
                if (findParent(a) != findParent(b)) {
                    unionParent(a, b);
                    cnt++;
                }
            }
            System.out.println(cnt);
        }

    }
}
