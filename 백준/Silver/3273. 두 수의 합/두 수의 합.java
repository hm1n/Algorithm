import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, x, start, end, cnt = 0;
        int[] arr;

        n = sc.nextInt();
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        x = sc.nextInt();
        Arrays.sort(arr);

        end = n - 1;
        for (start = 0; start < n; start++) {
            while (arr[start] + arr[end] >= x && start < end) {
                if (arr[start] + arr[end] == x) {
                    cnt++;
                }
                end--;
            }
            if (start >= end) {
                break;
            }
        }
        System.out.println(cnt);
    }
}
