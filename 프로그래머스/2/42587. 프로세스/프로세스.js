function solution(priorities, location) {
    let answer = 0;
    let Q = [];
    
    priorities.forEach((e, i) => {
        Q.push([i, e]);
    });

    while (Q.length > 0) {
        const p = Q[0];
        let flag = 0;
        for (let i = 1; i < Q.length; i++) {
            if (p[1] < Q[i][1]) {
                flag = 1;
                break;
            }
        }
        if (flag) {
            Q.shift();
            Q.push(p);
        } else {
            answer++;
            Q.shift();
            if (p[0] === location) {
                break;
            }
        }
    }

    return answer;
}