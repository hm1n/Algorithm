import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();

        if (n < m) {
            int tmp = n;
            n = m;
            m = tmp;
        }

        int GCM = 1;
        int LCM = 1;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0 && m % i == 0) {
                GCM = i;
            }
        }

        for (int i = n;; i++) {
            if (i % n == 0 && i % m == 0) {
                LCM = i;
                break;
            }
        }

        System.out.println(GCM);
        System.out.println(LCM);
        sc.close();
    }
}