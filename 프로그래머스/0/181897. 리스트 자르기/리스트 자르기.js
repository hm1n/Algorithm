function solution(n, slicer, num_list) {
    var answer = [];
    const [a, b, c] = slicer;
    switch (n) {
        case 1:
            answer = num_list.filter((_, i) => i <= b);
            break;
        case 2:
            answer = num_list.filter((_, i) => i >= a);
            break;
        case 3:
            answer = num_list.filter((_, i) => i >= a && i <= b)
            break;
        case 4:
            for (let i = a; i <= b; i += c) {
                answer.push(num_list[i])
            }
            break;
    }
    return answer;
}