function solution(participant, completion) {
    const H = new Map();
    
    participant.forEach((e) => {
        if (H.get(e) >= 1) {
            H.set(e, H.get(e) + 1);
        } else {
            H.set(e, 1);
        }
    })
    
    completion.forEach((e) => {
        if (H.get(e) > 1) {
            H.set(e, H.get(e) - 1);
        } else {
            H.delete(e);
        }
    })
    
    return [...H.keys()][0];
}