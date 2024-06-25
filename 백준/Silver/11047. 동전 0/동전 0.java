import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n, k;
        int[] val;

        n = sc.nextInt();
        k = sc.nextInt();
        val = new int[n];

        for (int i = 0; i < n; i++) {
            val[i] = sc.nextInt();
        }

        int cnt = 0;
        for (int i = n - 1; i >= 0; i--) {
            int tmp = k;

            tmp /= val[i];
            cnt += tmp;
            k %= val[i];
        }
        System.out.println(cnt);
    }
}
