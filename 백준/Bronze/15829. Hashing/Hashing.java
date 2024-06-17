import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int L = sc.nextInt();

        String tmp = sc.nextLine(); // 개행문자 버림
        String str = sc.nextLine();

        long[] hash = new long[L];
        long r = 1;
        long H = 0;

        for (int i = 0; i < hash.length; i++) {
            hash[i] = str.charAt(i) - 'a' + 1;
            hash[i] *= r;
            r *= 31;

            H += hash[i];
        }

        H %= 1234567891;
        System.out.println(H);
        sc.close();
    }
}