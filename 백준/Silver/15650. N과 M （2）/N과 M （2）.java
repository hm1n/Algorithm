/** [백준] 15649. N과 M(2) */

import java.io.IOException;
import java.util.Scanner;

public class Main {
    static int[] arr; // 원소를 저장할 배열

    private static void permutation(int cnt, int start, int n, int r) {
        if (cnt == r) {
            for (int i = 0; i < arr.length; i++) {
                System.out.print(arr[i] + " ");
            }
            System.out.println();
            return;
        }
        for (int i = start; i <= n; i++) {
            arr[cnt] = i;
            permutation(cnt + 1, i + 1, n, r);
        }
    }

    public static void main(String[] args) throws IOException {
        // BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int r = sc.nextInt();
        sc.close();

        arr = new int[r];
        permutation(0, 1, n, r);
    }// end main()
}
