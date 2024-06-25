import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, m;
        int[] arr, find;

        n = sc.nextInt();
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        m = sc.nextInt();
        find = new int[m];
        for (int i = 0; i < m; i++) {
            find[i] = sc.nextInt();
        }
        sc.close();

        Arrays.sort(arr);
        for (int i = 0; i < m; i++) {
            System.out.println(binarySearch(arr, 0, n - 1, find[i]));
        }

    }

    public static int binarySearch(int[] arr, int start, int end, int find) {
        int mid = (start + end) / 2;

        // 검색에 실패한 경우 0 반환
        if (start > end) {
            return 0;
        }

        if (find > arr[mid]) { // 중앙값보다 찾는 값이 큰 경우 범위를 좁혀 재귀
            return binarySearch(arr, mid + 1, end, find);
        } else if (find < arr[mid]) { // 중앙값보다 찾는 값이 작은 경우 범위를 좁혀 재귀
            return binarySearch(arr, start, mid - 1, find);
        } else { // 검색에 성공한 경우 1 반환
            return 1;
        }
    }
}
