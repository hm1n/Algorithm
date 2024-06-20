
/** [백준] 28702. FizzBuzz */

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        //
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String[] str = new String[3];
        for (int i = 0; i < 3; i++) {
            str[i] = br.readLine();
        }
        br.close();

        int tmp = 0;
        for (int i = 0; i < 3; i++) {
            if (str[i].charAt(0) >= '0' && str[i].charAt(0) <= '9') {
                tmp = Integer.parseInt(str[i]);
                tmp += 3 - i;
                break;
            }
        }

        if (tmp % 3 == 0 && tmp % 5 == 0) {
            System.out.println("FizzBuzz");
        } else if (tmp % 3 == 0) {
            System.out.println("Fizz");
        } else if (tmp % 5 == 0) {
            System.out.println("Buzz");
        } else {
            System.out.println(tmp);
        }
    }
}