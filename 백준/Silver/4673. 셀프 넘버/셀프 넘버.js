/** @format */
function solution() {
    const arr = new Array(10001).fill(0);
    let ans = "";

    for (let i = 1; i <= 10_000; i++) {
        const num =
            i
                .toString()
                .split("")
                .map(Number)
                .reduce((a, b) => a + b) + i;
        arr[num] = 1;
    }

    for (let i = 1; i <= 10_000; i++) {
        if (!arr[i]) ans += `${i.toString()}\n`;
    }
    console.log(ans.trim());
}

solution();