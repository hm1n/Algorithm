const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const digitalLogic = input[0].trim();
const [K, M] = input[1].trim().split(' ').map(Number);
const len = digitalLogic.length;
const map = new Map();
// Please Write your code here.
/**
 * 1. 앞에서부터 문자열을 K 길이로 잘라
 * 2. 걍 map으로 만들면 되는거아닌가?
 */

for (let i = 0; i < len - K; i++) {
    const substr = digitalLogic.slice(i, i + K);
    if (map.has(substr)) {
        map.set(substr, map.get(substr) + 1);
    } else {
        map.set(substr, 1);
    }
}

const values = [...map.values()];

for (let i = 0; i < values.length; i++) {
    if (values[i] >= M) {
        console.log(1);
        return;
    }
}

console.log(0);
return;