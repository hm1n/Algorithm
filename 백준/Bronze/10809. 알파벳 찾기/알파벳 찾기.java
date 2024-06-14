import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();
        int[] place = new int[26];

        for (int i = 0; i < place.length; i++) {
            place[i] = -1;
            for (int j = 0; j < str.length(); j++) {
                if (str.charAt(j) == 'a' + i) {
                    place[i] = j;
                    break;
                }
            }
        }
        for (int i = 0; i < place.length; i++) {
            System.out.printf("%d ", place[i]);
        }
    }
}