import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] size = new int[6];
        for (int i = 0; i < size.length; i++) {
            size[i] = sc.nextInt();
        }
        int t = sc.nextInt();
        int p = sc.nextInt();

        int bundle = 0;
        for (int i = 0; i < size.length; i++) {
            bundle += size[i] / t;
            if (size[i] % t != 0) {
                bundle++;
            }
        }
        System.out.println(bundle);

        System.out.println(n / p + " " + n % p);
        sc.close();
    }
}