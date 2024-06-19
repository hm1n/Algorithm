import java.util.*;
import java.util.Stack;

/** [백준] 17608. 막대기 */

public class Main {
    /* 2. 스택을 이용한 풀이 */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Stack<Integer> stack = new Stack<Integer>();

        int n; // 막대기 총 개수
        int cnt; // 보이는 막대기 개수
        int maxHeight; // 보이는 막대기 최대 높이

        n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            int tmp = sc.nextInt();
            stack.push(tmp);
        }

        cnt = 1;
        maxHeight = stack.peek();
        while (!stack.isEmpty()) {
            int tmp = stack.pop();

            if (tmp > maxHeight) {
                cnt++;
                maxHeight = tmp;
            }
        }
        System.out.println(cnt);
    }
}