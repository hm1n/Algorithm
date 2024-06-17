import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int L = sc.nextInt();

        String tmp = sc.nextLine(); // 개행문자 버림
        String str = sc.nextLine();

        long[] hash = new long[L];
        long r = 1;
        long H = 0;

        for (int i = 0; i < hash.length; i++) {
            hash[i] = str.charAt(i) - 'a' + 1;
            hash[i] *= r;

            // '해시 함수의 정의에서 유한한 범위의 출력을 가져야 한다고 했으니 적당히 큰 수 M으로 나눈다.'
            r = (r * 31) % 1234567891;
            H = (H + hash[i]) % 1234567891;
            // 1 <= L <= 50인 경우 값이 너무 커질 수 있음
            // 따라서 해시값을 계속 mod 연산해 크기가 커지는 것을 방지해야 함

        }

        System.out.println(H);
        sc.close();
    }
}