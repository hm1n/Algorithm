function solution(myStr) {
    const abc = ['a', 'b', 'c']
    let answer = [];
    let str = '';
    
    for (ch of myStr) {
        if (abc.includes(ch)) {
            if (str !== '') {
                answer.push(str);
            }
            str = '';
        }
        else {
            str += ch;
        }
    }
    if (str !== '') answer.push(str);
    
    return answer.length ? answer : ["EMPTY"] ;
}