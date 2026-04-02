function solution(brown, yellow) {
    let yw = yellow;
    let yh = 1;

    while (yh <= yw) {
        if (yellow % yh === 0) {
            if ((yw + 2) * 2 + yh * 2 === brown)
                return [yw + 2, yh + 2];
        }
        yh++;
        yw = yellow / yh;
    }
    
}