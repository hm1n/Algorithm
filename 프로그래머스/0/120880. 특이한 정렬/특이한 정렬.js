function solution(numlist, n) {
    return numlist.sort((a, b) => 
                 Math.abs(n - a) > Math.abs(n - b) ? 1 :
                 Math.abs(n - a) === Math.abs(n - b) ?
                 b > a ? 1 : -1 : -1
            );
}