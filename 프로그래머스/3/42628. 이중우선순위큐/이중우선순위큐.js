function solution(operations) {
    let answer = [];
    const queue = [];
    
    operations.forEach((str) => {
        let [op, num] = str.split(" ");
        num = Number(num);
        
        switch (op) {
            case 'I':
                queue.push(num);
                queue.sort((a, b) => a - b);
                return;
            case 'D':
                num === 1 ? queue.pop() : queue.shift();
        }
        
    })
    
    queue.length > 0 ? answer = [queue[queue.length - 1], queue[0]] : answer = [0, 0];
    return answer;
}