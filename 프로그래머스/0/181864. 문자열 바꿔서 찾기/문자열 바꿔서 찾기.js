function solution(myString, pat) {
    return myString.includes([...pat].map(v => v === 'A' ? 'B' : 'A').join('')) ? 1 : 0;
}