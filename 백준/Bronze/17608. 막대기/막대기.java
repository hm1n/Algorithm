import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        int h = arr[n - 1];
        int cnt = 1;
        for (int i = n - 2; i >= 0; i--) {
            if (h < arr[i]) {
                cnt++;
                h = arr[i];
            }
        }

        System.out.println(cnt);
        sc.close();
    }
}