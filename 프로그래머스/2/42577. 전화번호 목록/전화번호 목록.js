function solution(phone_book) {
    const H = new Set(phone_book);
    
    for (let e of phone_book) {
        for (let i = 1; i < e.length; i++) {
            const str = e.slice(0, i);
            
            if (H.has(str)) {
                return false;
            }
        }
        H.add(e);
    };
    
    return true;
}