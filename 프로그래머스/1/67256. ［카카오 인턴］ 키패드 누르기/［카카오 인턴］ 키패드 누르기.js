function solution(numbers, hand) {
    const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    var answer = '';
    
    // 왼손, 오른손의 현재 위치 저장
    var l = [3, 0]; 
    var r = [3, 2];
    
    // 좌표 간 거리 계산 함수, 맨해튼 계산법 반영
    function calcDistance([y, x], [ny, nx]) {
        return (Math.abs(x - nx) + Math.abs(y - ny));
    }
    
    for (let n of numbers) {
        var nearHand = '';
        var ny = 3;
        var nx = 1;
        
        if (n !== 0) {
            ny = Math.floor(((n - 1) / 3));
            nx = keypad[ny].indexOf(n);
        }
        
        if (n === 1 || n === 4 || n === 7) {
            nearHand = 'left';
        } else if (n === 3 || n === 6 || n === 9) {
            nearHand = 'right';
        } else {        
            const leftDistance = calcDistance(l, [ny, nx]);
            const rightDistance = calcDistance(r, [ny, nx]);
            
            if (leftDistance < rightDistance) {
                nearHand = 'left';
            } else if (leftDistance > rightDistance) {
                nearHand = 'right';
            } else {
                nearHand = hand;
            }
        }
        if (nearHand === 'left') {
            answer += 'L';
            l[0] = ny;
            l[1] = nx;
        } else {
            answer += 'R';
            r[0] = ny;
            r[1] = nx;
        }
        
    }

    return answer;
}