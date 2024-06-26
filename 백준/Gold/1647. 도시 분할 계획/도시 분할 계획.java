import java.util.*;

class Edge implements Comparable<Edge> {

    private int cost;
    private int nodeA;
    private int nodeB;

    public Edge(int cost, int nodeA, int nodeB) {
        this.cost = cost;
        this.nodeA = nodeA;
        this.nodeB = nodeB;
    }

    public int getCost() {
        return this.cost;
    }

    public int getNodeA() {
        return this.nodeA;
    }

    public int getNodeB() {
        return this.nodeB;
    }

    @Override
    public int compareTo(Edge other) {
        return this.cost - other.cost;
    }
}

public class Main {
    public static int[] parent = new int[100001];
    public static ArrayList<Edge> edges = new ArrayList<Edge>();
    public static int cost = 0, maxCost;

    public static int findParent(int x) {
        if (parent[x] != x) {
            parent[x] = findParent(parent[x]);
        }
        return parent[x];
    }

    public static void unionParent(int a, int b) {
        a = findParent(a);
        b = findParent(b);

        if (a > b) {
            parent[a] = b;
        } else {
            parent[b] = a;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, m;

        n = sc.nextInt();
        m = sc.nextInt();

        for (int i = 1; i <= n; i++) {
            parent[i] = i;
        }

        for (int i = 0; i < m; i++) {
            int a = sc.nextInt();
            int b = sc.nextInt();
            int c = sc.nextInt();

            edges.add(new Edge(c, a, b));
        }

        Collections.sort(edges);

        for (int i = 0; i < edges.size(); i++) {
            int a = edges.get(i).getNodeA();
            int b = edges.get(i).getNodeB();
            int c = edges.get(i).getCost();

            if (findParent(a) != findParent(b)) {
                unionParent(a, b);
                cost += c;
                maxCost = c;
            }
        }
        System.out.println(cost - maxCost);
    }

}