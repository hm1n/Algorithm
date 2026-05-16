function solution(balls, share) {
    let result = 1;

    const r = Math.min(share, balls - share);

    for (let i = 1; i <= r; i++) {
        result *= balls - r + i;
        result /= i;
    }

    return Math.round(result);
}