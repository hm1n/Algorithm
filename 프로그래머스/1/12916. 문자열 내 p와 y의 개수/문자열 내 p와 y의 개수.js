function solution(s){
    const p = s.split('').filter((e) => e === 'p' || e === 'P').join('').length;
    const y = s.split('').filter((e) => e === 'y' || e === 'Y').join('').length;
    
    return p === y;
}