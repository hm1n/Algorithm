import java.util.Arrays;
import java.util.Scanner;

/** [백준] 1717. 집합의 표현 */
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n, m;
        int[] arr;

        n = sc.nextInt();
        m = sc.nextInt();

        arr = new int[n + 1];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i;
        }

        for (int i = 0; i < m; i++) {
            int op = sc.nextInt();
            int a = sc.nextInt();
            int b = sc.nextInt();

            if (op == 0) {
                union(arr, a, b);
            }
            if (op == 1) {
                a = findUnion(arr, a);
                b = findUnion(arr, b);

                if (a == b) {
                    System.out.println("YES");
                } else {
                    System.out.println("NO");
                }
            }
            // System.out.println(Arrays.toString(arr));
        }
    }

    public static void union(int[] arr, int a, int b) {
        a = findUnion(arr, a);
        b = findUnion(arr, b);

        if (a < b) {
            arr[b] = a;
        } else {
            arr[a] = b;
        }
        return;
    }

    public static int findUnion(int[] arr, int a) {
        if (arr[a] != a) {
            arr[a] = findUnion(arr, arr[a]);
        }
        return arr[a];
    }
}