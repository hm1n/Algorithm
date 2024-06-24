import java.util.ArrayList;
import java.util.Scanner;

/** [백준] 2606. 바이러스 */
public class Main {
    static boolean[] isVisited; // dfs 시 노드 방문 여부 체크용 배열 선언
    static int cnt; // 방문하는 노드의 개수

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, m;

        n = sc.nextInt();
        m = sc.nextInt();

        ArrayList<Integer>[] graph = new ArrayList[n + 1]; // 그래프를 연결리스트 배열로 선언 및 초기화
        isVisited = new boolean[n + 1]; // 방문 여부 체크 배열 초기화

        // 연결리스트 배열의 각 인덱스 초기화
        for (int i = 1; i < graph.length; i++) {
            graph[i] = new ArrayList<Integer>();
        }

        for (int i = 0; i < m; i++) {
            // 각 노드의 끝점을 입력받음
            int u = sc.nextInt();
            int v = sc.nextInt();

            // 입력받은 끝점의 연결 노드 정보 저장
            graph[u].add(v);
            graph[v].add(u);
        }
        sc.close();

        dfs(graph, 1);
        System.out.println(cnt);

    }

    // dfs 메소드
    public static void dfs(ArrayList<Integer>[] graph, int x) {
        isVisited[x] = true;
        for (int i = 0; i < graph[x].size(); i++) {
            int y = graph[x].get(i);
            if (!isVisited[y]) {
                cnt++; // dfs를 수행해 노드를 방문할 때마다 방문 노드의 개수 +1
                dfs(graph, y);
            }
        }
    }
}