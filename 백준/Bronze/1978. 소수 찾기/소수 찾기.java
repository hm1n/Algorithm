import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }

        int cnt = 0;
        for (int i = 0; i < arr.length; i++) {
            int divCnt = 0;
            for (int j = 1; j <= arr[i]; j++) {
                if (arr[i] % j == 0) {
                    divCnt++;
                }
            }
            if (divCnt == 2) {
                cnt++;
            }
        }
        System.out.println(cnt);
        sc.close();
    }
}