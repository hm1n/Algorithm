function solution(picture, k) {
    var answer = [];
    
    picture = picture.map((e) => e.split(''));
    
    for (let i = 0; i < picture.length; i++) {
        
            var arr = [];
            for (let x = 0; x < picture[i].length; x++) {
                for (let y = 0; y < k; y++) arr.push(picture[i][x]);
            }
        
        var tmp = arr.join('');
        for (let j = 0; j < k; j++) {
            answer.push(tmp);
        }
    }
    
    return answer;
}