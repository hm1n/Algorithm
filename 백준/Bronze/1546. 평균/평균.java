import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int max = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        double[] newArr = new double[n];
        double sum = 0;
        for (int i = 0; i < newArr.length; i++) {
            newArr[i] = (double) arr[i] / max * 100;
            sum += newArr[i];
        }
        double avg = (double) sum / n;
        System.out.println(avg);
    }
}