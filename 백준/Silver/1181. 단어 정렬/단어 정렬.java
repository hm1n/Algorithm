import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Comparator;

public class Main {
    static ArrayList<String> words = new ArrayList<String>();

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StrComparator sc = new StrComparator();
        int n;

        n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            String strTmp = br.readLine();
            if (words.indexOf(strTmp) == -1) {
                words.add(strTmp);
            }
        }

        words.sort(sc);
        for (int i = 0; i < words.size(); i++) {
            System.out.println(words.get(i));
        }
    }

    static class StrComparator implements Comparator<String> {
        @Override
        public int compare(String o1, String o2) {
            if (o1.length() == o2.length()) {
                return o1.compareTo(o2);
            }
            return o1.length() - o2.length();
        }
    }
}
