function solution(polynomial) {
    const words = polynomial.split(" ");
    
    let x = 0;
    let s = 0;
    let ans = '';
    
    for (let w of words) {
        if (w !== '+') {
            if (w.includes('x')) {
                if (w.length === 1) x++;
                else x += Number(w.slice(0, w.length - 1))
            } else {
                s += Number(w);
            }
        }
    }
    if (x > 0) {
        if (x === 1) ans += 'x';
        else ans += (x + 'x');
    }
    if (x > 0 && s > 0) ans += ' + ';
    if (s > 0) ans += s.toString();
    
    return ans;
}