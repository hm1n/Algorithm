function solution(spell, dic) {
    var answer = 2;
    
    for (let d of dic) {
        let flag = 1;
        for (let s of spell) {
            if (!d.includes(s)) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            answer = 1;
            break;
        }
    }
    return answer;
}