import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int v = sc.nextInt();

        if (v < a) {
            System.out.println(1);
        } else {
            if ((v - a) % (a - b) == 0) {
                System.out.println((v - a) / (a - b) + 1);
            } else {
                System.out.println((v - a) / (a - b) + 2);
            }
        }

        sc.close();
    }
}