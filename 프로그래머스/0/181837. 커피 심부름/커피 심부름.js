function solution(order) {
    var answer = 0;
    
    order.forEach((e, i) => {
        if (e.includes('americano')) {
            answer += 4500;
        } else if (e.includes('cafelatte')) {
            answer += 5000;
        } else {
            answer += 4500;
        }
    })
    return answer;
}