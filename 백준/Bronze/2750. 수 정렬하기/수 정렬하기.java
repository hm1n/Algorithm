import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/** 선택 정렬 */

public class Main {
    static void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        return;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n;
        int[] arr;

        // 배열 입력
        n = Integer.parseInt(br.readLine());
        arr = new int[n];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = Integer.parseInt(br.readLine());
        }

        // 선택 정렬
        for (int i = 0; i < arr.length; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            swap(arr, i, min);
        }

        // 배열 출력
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}