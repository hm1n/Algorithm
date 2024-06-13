import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for (int i = 0; i < T; i++) {
            int H = sc.nextInt();
            int W = sc.nextInt();
            int N = sc.nextInt();

            int cnt = 0;
            for (int w = 1; w <= W; w++) {
                for (int h = 1; h <= H; h++) {
                    cnt++;

                    if (cnt == N) {
                        System.out.printf("%d%02d\n", h, w);
                        break;
                    }
                }
                if (cnt == N) {
                    break;
                }
            }
        }
    }
}