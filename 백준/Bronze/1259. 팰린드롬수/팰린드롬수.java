import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String str = sc.nextLine();

        while (str.charAt(0) != '0') {
            char[] strLeft = new char[str.length() / 2];

            for (int i = 0; i < strLeft.length; i++) {
                strLeft[i] = str.charAt(i);
            }

            int flag = 0;
            for (int i = 0; i < strLeft.length; i++) {
                int l = strLeft.length;

                if (str.length() % 2 == 1 && strLeft[l - i - 1] != str.charAt(l + i + 1)) {
                    flag = 1;
                    break;
                }

                if (str.length() % 2 == 0 && strLeft[l - i - 1] != str.charAt(l + i)) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                System.out.println("yes");
            } else {
                System.out.println("no");
            }

            str = sc.nextLine();
        }
        sc.close();
    }
}