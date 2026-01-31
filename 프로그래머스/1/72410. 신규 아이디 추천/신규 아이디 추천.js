function solution(new_id) {
    var answer = new_id
        .toLowerCase()
        .replace(/[^\w-._]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/, '')
        .replace(/^$/, 'a')
        .slice(0, 15)
        .replace(/\.$/, '');
    
    if (answer.length < 3) answer = answer.padEnd(3, answer[answer.length - 1]);
    return answer;
}