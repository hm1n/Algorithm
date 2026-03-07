function solution(numbers) {
    numbers.sort((a, b) => {
        if (a.toString()[0] !== b.toString()[0]) return b.toString()[0] - a.toString()[0];
        return Number(b.toString() + a.toString()) - Number(a.toString() + b.toString());
    })
    
    if (numbers[0] === 0) return '0';
    return numbers.join('');
}