
/** [백준] 2493. 탑 */
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.Stack;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());

        Stack<Integer[]> stack = new Stack<Integer[]>();
        for (int i = 0; i < n; i++) {
            int tmp = Integer.parseInt(st.nextToken());

            while (!stack.isEmpty()) {
                if (stack.peek()[0] > tmp) {
                    System.out.print(stack.peek()[1] + " ");
                    break;
                }
                stack.pop();
            }
            if (stack.isEmpty()) {
                System.out.print("0 ");
            }
            stack.push(new Integer[] { tmp, i + 1 });
        }
    }
}
