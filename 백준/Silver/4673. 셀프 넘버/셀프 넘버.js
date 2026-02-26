/** @format */
function solution() {
    const arr = [];
    let ans = "";

    for (let i = 1; i <= 10_000; i++) {
        const num =
            i
                .toString()
                .split("")
                .map(Number)
                .reduce((a, b) => a + b) + i;
        arr.push(num);
    }

    for (let i = 1; i <= 10_000; i++) {
        if (!arr.includes(i)) ans += `${i.toString()}\n`;
    }
    console.log(ans.trim());
}

solution();