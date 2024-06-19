import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt(); // 카드 수

        Queue<Integer> queue = new LinkedList<Integer>(); // 큐 생성

        for (int i = 1; i <= n; i++) { // 큐에 n ~ 1까지 숫자 삽입
            queue.add(i);
        }

        while (queue.size() > 1) {
            queue.remove();
            queue.offer(queue.poll());
        }

        System.out.println(queue.peek());
    }
}
