function solution(num_list) {
    var answer = 0;
    
    const odd_list = num_list.filter((e, i) => {
        if (e % 2 == 1) return true;
    });
    const even_list = num_list.filter((e, i) => {
        if (e % 2 == 0) return true;
    });
    
    answer = Number(odd_list.join('')) + Number(even_list.join(''))
    
    return answer;
}