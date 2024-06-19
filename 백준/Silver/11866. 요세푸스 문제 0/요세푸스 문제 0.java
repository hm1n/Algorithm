/** [백준] 11866. 요세푸스 문제 */

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        int n = sc.nextInt();
        int k = sc.nextInt();

        Queue<Integer> table = new LinkedList<Integer>();

        for (int i = 1; i <= n; i++) { // k부터 k-1까지 원형으로 큐에 삽입
            table.add(i);
        }

        int cnt = 1;
        sb.append("<");
        while (table.size() > 1) {
            int tmp = table.poll();
            if (cnt == k) {
                cnt = 0;
                sb.append(tmp).append(", ");
            } else {
                table.add(tmp);
            }
            cnt++;
        }
        sb.append(table.poll()).append(">");
        System.out.println(sb);
    }
}
