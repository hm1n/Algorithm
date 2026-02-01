function solution(phone_number) {
    var answer = '';
    const idx = phone_number.length - 4;
    
    for (let i = 0; i < idx; i++) answer += '*';
    answer += phone_number.slice(idx);
    return answer;
}