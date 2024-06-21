import java.util.Arrays;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Main {
    static char[] vowel = { 'a', 'e', 'i', 'o', 'u' };
    static char[] alphabet;
    static char[] password;
    static int L;
    static int C;
    static int cntVow = 0;
    static int cntCons = 0;

    public static boolean isVowel(char ch) {
        boolean isVowel = false;
        for (int i = 0; i < vowel.length; i++) {
            if (ch == vowel[i]) {
                isVowel = true;
            }
        }
        return isVowel;
    }

    public static void printPassword() {
        for (int i = 0; i < password.length; i++) {
            System.out.print(password[i]);
        }
        System.out.println();
        return;
    }

    public static void combination(int cnt, int start) {
        if (cnt == L) {
            if (cntVow >= 1 && cntCons >= 2) {
                printPassword();
            }
            return;
        }
        for (int i = start; i < C; i++) {
            if (isVowel(alphabet[i])) {
                cntVow++;
            } else {
                cntCons++;
            }

            password[cnt] = alphabet[i];
            combination(cnt + 1, i + 1);

            if (isVowel(alphabet[i])) {
                cntVow--;
            } else {
                cntCons--;
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        L = sc.nextInt();
        C = sc.nextInt();
        password = new char[L];
        alphabet = new char[C];

        String tmp = sc.nextLine();
        String str = sc.nextLine();

        StringTokenizer st = new StringTokenizer(str);
        int i = 0;
        while (st.hasMoreTokens()) {
            alphabet[i++] = st.nextToken().charAt(0);
        }
        Arrays.sort(alphabet);
        combination(0, 0);
    }
}
