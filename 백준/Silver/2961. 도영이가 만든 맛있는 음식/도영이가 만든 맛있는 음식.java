import java.util.Arrays;
import java.util.Scanner;

/** [백준] 2961. 도영이가 만든 맛있는 음식 */

public class Main {
    static int n;
    static int[][] ingredient;
    static boolean[] isSelected;
    static int[] sum;
    static int[] product;
    static int idx;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        ingredient = new int[n][2];
        sum = new int[(int) (Math.pow(2, n))];
        product = new int[(int) (Math.pow(2, n))];
        Arrays.fill(product, 1);

        isSelected = new boolean[n];

        for (int i = 0; i < n; i++) {
            ingredient[i][0] = sc.nextInt();
            ingredient[i][1] = sc.nextInt();
        }
        sc.close();

        idx = 0;
        subset(0);

        int minDiff = Math.abs(product[0] - sum[0]);
        for (int i = 1; i < product.length - 1; i++) {
            if (Math.abs(product[i] - sum[i]) < minDiff) {
                minDiff = Math.abs(product[i] - sum[i]);
            }
        }
        System.out.println(minDiff);
    }

    public static void subset(int cnt) {
        if (cnt == n) {
            for (int i = 0; i < isSelected.length; i++) {
                if (isSelected[i]) {
                    product[idx] *= ingredient[i][0];
                    sum[idx] += ingredient[i][1];
                }
            }
            idx++;
            return;
        }
        isSelected[cnt] = true;
        subset(cnt + 1);
        isSelected[cnt] = false;
        subset(cnt + 1);
    }
}
