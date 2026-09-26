function solution(my_string) {
    let arr = my_string.split("");
    let answer = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let num = 0;
        while ('0' <= arr[i] && arr[i] <= '9') {
            num += Number(arr[i]);
            num *= 10;
            i++;
        }        
        num /= 10;
        answer += num;
    }
    return answer;
}