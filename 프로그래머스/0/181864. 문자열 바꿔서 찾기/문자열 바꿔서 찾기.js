function solution(myString, pat) {
    let reversePat = '';
    
    for (let ch of pat) {
        if (ch === 'A') reversePat += 'B';
        else reversePat += 'A';
    }
    
    return myString.includes(reversePat) ? 1 : 0;
}