function solution(record) {
    const dict = new Map();
    const messages = [];
    const ans = [];
    
    for (let i = 0; i < record.length; i++) {
        record[i] = record[i].split(" ");
        const [op, id, name] = record[i];
        
        if (op === 'Change') {
            dict.delete(id);
            dict.set(id, name);
            continue;
        } 
        
        
        if (op === 'Enter') {
            dict.set(id, name);
        }
        
        messages.push([op, id])
    }
    
    for (let [op, id] of messages) {
        let message = '';
        
        message += dict.get(id);
        if (op === 'Enter') message += '님이 들어왔습니다.'
        else message += '님이 나갔습니다.'
        ans.push(message);
    }
    
    return ans;
}