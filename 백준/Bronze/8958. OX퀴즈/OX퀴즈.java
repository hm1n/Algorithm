import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        String tmp = sc.nextLine(); // 개행문자 버림

        for (int i = 0; i < n; i++) {
            String str = sc.nextLine();

            int cnt = 0;
            int score = 0;
            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(j) == 'O') {
                    cnt++;
                } else {
                    cnt = 0;
                }
                score += cnt;
            }
            System.out.println(score);
        }
    }
}