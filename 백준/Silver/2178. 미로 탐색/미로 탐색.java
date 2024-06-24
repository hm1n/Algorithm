import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

/** [백준] 2178. 미로 탐색 */

public class Main {
    static int[][] maze; // 2차원 배열로 미로 선언
    static int n, m; // 미로의 행, 열

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        m = sc.nextInt();

        maze = new int[n][m];
        String tmp = sc.nextLine();

        for (int i = 0; i < maze.length; i++) { // 미로 입력
            String line = sc.nextLine();
            for (int j = 0; j < line.length(); j++) {
                maze[i][j] = line.charAt(j) - '0';
            }
        }
        sc.close();

        dfs(0, 0); // 미로에 대해 최단거리 탐색 수행
        System.out.println(maze[n - 1][m - 1]); // 지나야 하는 최소 칸 수 출력
    }

    // dfs 함수
    public static void dfs(int startx, int starty) {
        // 미로에서의 이동 변화량 dx, dy
        int[] dx = { -1, 1, 0, 0 }; // 상하좌우 이동별 증가량
        int[] dy = { 0, 0, -1, 1 };

        Queue<Integer[]> q = new LinkedList<Integer[]>(); // 큐 생성
        q.offer(new Integer[] { startx, starty }); // 시작 위치를 큐에 삽입

        while (!q.isEmpty()) {
            Integer[] tmp = q.poll(); // 큐에서 원소를 꺼냄
            Integer x = tmp[0]; // 큐에서 꺼낸 원소의 x좌표
            Integer y = tmp[1]; // 큐에서 꺼낸 원소의 y좌표

            // 상, 하, 좌, 우 이동이 가능한지 검사
            for (int i = 0; i < 4; i++) {
                Integer nextX = x + dx[i]; // x좌표에 증가량만큼 더함
                Integer nextY = y + dy[i]; // y좌표에 증가량만큼 더함

                if (0 <= nextX && nextX < n && 0 <= nextY && nextY < m) { // 이동 가능한 범위인 경우
                    if (maze[nextX][nextY] == 1) { // 이동 가능한 경로인 경우
                        q.offer(new Integer[] { nextX, nextY }); // 큐에 이동 가능한 위치의 좌표를 삽입
                        maze[nextX][nextY] = maze[x][y] + 1; // 미로에 이동한 칸 수 업데이트
                    }
                }
            }
        }
        return;
    }
}