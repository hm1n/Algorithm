function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    const N = truck_weights.length;
    const Q = new Array(bridge_length).fill(0);
    const arrived = [];
    const wait = truck_weights.reverse();
    let sum = 0;

    while (arrived.length < N) {
        const v = Q.shift();
        if (v > 0) {
            arrived.push(v);
            sum -= v;
        }

        if (sum + wait[wait.length - 1] <= weight) {
            const t = wait.pop();
            Q.push(t);
            sum += t;
        } else {
            Q.push(0);
        }

        sec++;
    }

    return sec;
}