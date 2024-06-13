import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[] arr = new int[10];
        for (int i = 0; i < 10; i++) {
            arr[i] = sc.nextInt() % 42;
        }

        int cnt = 0;
        for (int i = 0; i < 10; i++) {

            for (int j = i; j >= 0; j--) {
                if (i != j && arr[i] == arr[j]) {
                    cnt++;
                    break;
                }
            }
        }
        System.out.println(10 - cnt);
    }
}