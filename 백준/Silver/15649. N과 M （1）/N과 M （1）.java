/** [백준] 15649. N과 M(1) */

import java.io.BufferedReader;
import java.io.IOError;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Scanner;

/** 순열 실습 */

public class Main {
    static int[] arr; // 원소를 저장할 배열
    static boolean[] visited; // 중복을 제거하기 위한 방문 처리

    private static void permutation(int cnt, int n, int r) {
        if (cnt == r) {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
            return;
        }
        for (int i = 1; i <= n; i++) {
            if (visited[i] == false) {
                visited[i] = true;
                arr[cnt] = i;
                permutation(cnt + 1, n, r);
                visited[i] = false;
            }
        }
    }

    public static void main(String[] args) throws IOException {
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int r = sc.nextInt();
        sc.close();

        arr = new int[r];
        visited = new boolean[n + 1];
        permutation(0, n, r);
    }// end main()
}
