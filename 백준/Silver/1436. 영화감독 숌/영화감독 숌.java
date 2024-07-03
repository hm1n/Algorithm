import java.util.Scanner;

public class Main {

    // 완전탐색(브루트포스)으로 풀이
    static int calEndOfWorld(int n) {
        int endOfWorld = 666;
        int cnt = 0;

        while (true) {
            if (String.valueOf(endOfWorld).contains("666")) {
                cnt++;
            }

            if (cnt == n) {
                break;
            }
            endOfWorld++;
        }
        return endOfWorld;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        System.out.println(calEndOfWorld(n));
        sc.close();
    }

}
