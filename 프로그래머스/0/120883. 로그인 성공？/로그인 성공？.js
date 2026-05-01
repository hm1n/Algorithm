function solution(id_pw, db) {
    var answer = 'fail';
    const [id, pw] = id_pw;
    
    for (let i = 0; i < db.length; i++) {
        if (id === db[i][0] && pw === db[i][1]) {
            answer = 'login';
            break;
        }
        if (id === db[i][0] && pw !== db[i][1]) {
            answer = 'wrong pw';
        }
    }
    
    return answer;
}