import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int cnst = 0;
        for (int i = 1; i <= n; i++) {
            int tmp = i;
            int sum = tmp;
            while (tmp > 0) {
                sum += tmp % 10;
                tmp /= 10;
            }
            if (sum == n) {
                cnst = i;
                break;
            }
        }

        System.out.println(cnst);
        sc.close();
    }
}