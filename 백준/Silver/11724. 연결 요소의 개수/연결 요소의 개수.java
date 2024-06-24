import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Scanner;

/**
 * S11724
 */
public class Main {
    static boolean[] isVisited;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, m;

        n = sc.nextInt();
        m = sc.nextInt();

        ArrayList<Integer>[] graph = new ArrayList[n + 1];

        isVisited = new boolean[n + 1];
        for (int i = 1; i < graph.length; i++) {
            graph[i] = new ArrayList<Integer>();
        }

        for (int i = 0; i < m; i++) {
            int u = sc.nextInt();
            int v = sc.nextInt();

            graph[u].add(v);
            graph[v].add(u);
        }
        sc.close();

        int cnt = 0;
        for (int i = 1; i <= n; i++) {
            cnt += dfs(graph, i);
        }
        System.out.println(cnt);

    }

    public static int dfs(ArrayList<Integer>[] graph, int x) {
        if (isVisited[x]) {
            return 0;
        }
        isVisited[x] = true;
        for (int i = 0; i < graph[x].size(); i++) {
            int y = graph[x].get(i);
            if (!isVisited[y]) {
                dfs(graph, y);
            }
        }
        return 1;
    }
}