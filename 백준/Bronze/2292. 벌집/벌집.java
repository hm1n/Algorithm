import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        long n = sc.nextLong();

        long i = 1;
        long k = 1;
        long cnt = 0;

        while (k < n) {
            k += 6 * i++;
            cnt++;
        }

        cnt++;
        System.out.println(cnt);
        sc.close();
    }
}