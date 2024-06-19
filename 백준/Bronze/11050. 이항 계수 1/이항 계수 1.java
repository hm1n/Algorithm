import java.util.Scanner;

/** [백준] 11050. 이항 계수 1 */
public class Main {
    static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();

        int ans = factorial(n) / (factorial(k) * factorial(n - k));
        System.out.println(ans);
        sc.close();
    }
}
