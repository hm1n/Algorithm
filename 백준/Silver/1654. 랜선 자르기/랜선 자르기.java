import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, k, cnt;
        long min, max;
        long[] arr;

        k = sc.nextInt();
        n = sc.nextInt();
        arr = new long[k];
        max = 0;
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        min = 1;
        max += 1;
        while (min < max) {
            long mid = (min + max) / 2;

            cnt = 0;
            for (int i = 0; i < k; i++) {
                cnt += (arr[i] / mid);
            }
            if (cnt < n) {
                max = mid;
            } else {
                min = mid + 1;
            }
        }
        System.out.println(min - 1);
        sc.close();
    }
}
