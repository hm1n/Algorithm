import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        int[][] schedule;

        n = sc.nextInt();
        schedule = new int[n][2];
        for (int i = 0; i < n; i++) {
            schedule[i][0] = sc.nextInt();
            schedule[i][1] = sc.nextInt();
        }

        Arrays.sort(schedule, new IntComparator());

        int cnt = 1;
        int min = 0;
        for (int i = 1; i < schedule.length; i++) {
            if (schedule[min][1] <= schedule[i][0]) {
                min = i;
                cnt++;
            }
        }
        System.out.println(cnt);
        sc.close();

        // System.out.println(Arrays.deepToString(schedule)); // 2차원 배열을 문자열로 변경
    }

    static class IntComparator implements Comparator<int[]> {
        @Override
        public int compare(int[] o1, int[] o2) {
            if (o1[1] == o2[1]) {
                return (o1[0] - o2[0]);
            } else {
                return (o1[1] - o2[1]);
            }
        }

    }
}