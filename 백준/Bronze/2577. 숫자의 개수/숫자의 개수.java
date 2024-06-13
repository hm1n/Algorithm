import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        int product = a * b * c;

        String str = String.valueOf(product);
        int[] cnt = new int[10];
        for (int i = 0; i < str.length(); i++) {
            int num = str.charAt(i) - '0';
            cnt[num]++;
        }

        for (int i = 0; i < cnt.length; i++) {
            System.out.println(cnt[i]);
        }
    }
}