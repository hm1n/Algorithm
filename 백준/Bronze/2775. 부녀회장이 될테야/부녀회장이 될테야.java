import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int t = sc.nextInt();

        for (int i = 0; i < t; i++) {
            int k = sc.nextInt();
            int n = sc.nextInt();

            int[][] arr = new int[k + 1][n];
            for (int j = 0; j < n; j++) {
                arr[0][j] = j + 1;
            }

            for (int j = 1; j <= k; j++) {
                for (int l = 0; l < n; l++) {
                    for (int m = 0; m <= l; m++) {
                        arr[j][l] += arr[j - 1][m];
                    }
                }
            }
            System.out.println(arr[k][n - 1]);
        }
        sc.close();
    }
}