import java.util.*;

public class Main {
    public void inPlaceHeapSort(int[] arr) {

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int cnt = 0;

        int sum = 1;
        int start = 1;
        int end = 1;

        while (start <= n) {
            if (sum < n) {
                end++;
                sum += end;
            } else if (sum > n) {
                sum -= start;
                start++;
            } else {
                cnt++;
                end++;
                sum += end;
            }
        }

        System.out.println(cnt);
        sc.close();
    }
}