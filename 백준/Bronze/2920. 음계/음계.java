import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        int n = sc.nextInt();        
        int flag = 0;
        for (int i = 0; i < 7; i++) {
            int m = sc.nextInt();
            if (m == n + 1) {
                flag = 1;
            } else if (m == n - 1) {
                flag = 2;
            } else {
                flag = 0;
                System.out.println("mixed");
                break;
            }
            n = m;
        }

        if (flag == 1) {
            System.out.println("ascending");
        }
        if (flag == 2) {
            System.out.println("descending");
        }
    }   
}