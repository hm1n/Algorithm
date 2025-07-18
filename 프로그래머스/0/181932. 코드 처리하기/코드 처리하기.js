function solution(code) {
    var answer = '';
    let mode = 0;
    
    for (i = 0; i < code.length; i++) {
        if (!mode) {
            if (code[i] == '1') {
                mode = 1    
            } else {
                if (i % 2 == 0) {
                    answer += code[i]
                }
            }
        } else {
            if (code[i] == '1') {
                mode = 0    
            } else {
                if (i % 2 == 1) {
                    answer += code[i]
                }
            }
        }
    }
    
    if (answer == '') {
        answer = 'EMPTY'
    }
    return answer;
}