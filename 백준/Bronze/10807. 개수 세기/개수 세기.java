import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();        
        int[] arr;
        arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        int k = sc.nextInt();
        int cnt = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == k) {
                cnt++;
            }
        }
        System.out.println(cnt);        
    }   
}