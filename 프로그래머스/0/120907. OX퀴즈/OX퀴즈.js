function solution(quiz) {
    var answer = [];
    
    for (let i = 0; i < quiz.length; i++) {
        let [n1, op, n2, eq, n3] = quiz[i].split(" ");
        
        answer.push('X');
        
        n1 = +n1;
        n2 = +n2;
        n3 = +n3;
        
        if (n1.length === 2) n1 = n1 * -1;
        if (n2.length === 2) n2 = n2 * -1;
        if (n3.length === 2) n3 = n3 * -1;
        
        switch (op) {
            case '+':
                if (n1 + n2 === n3) answer[i] = 'O';
                break;
            case '-':
                if (n1 - n2 === n3) answer[i] = 'O';
                break;
        }
    }
    
    return answer;
}