function solution(str1, str2) {
    var answer = '';
    
    let i = 0;
    let j = 0;
    
    while (i < str1.length || j < str2.length) {
        if (i < str1.length) {
            answer += str1[i++]   
        }
        if (j < str2.length) {
            answer += str2[j++]
        }        
    }
    
    return answer;
}