function solution(date1, date2) {
    for (let i = 0; i < 3; i++) {
        if (date1[i] > date2[i]) {
            return 0;
        } else if (date1[i] < date2[i]) {
            return 1;
        }
    }
    return 0;
}