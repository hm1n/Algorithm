import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[30];
        for (int i = 0; i < 28; i++) {
            int tmp = sc.nextInt();
            arr[tmp - 1] = tmp;
        }

        for (int i = 0; i < 30; i++) {
            if (arr[i] == 0) {
                System.out.println(i + 1);
            }
        }

    }
}