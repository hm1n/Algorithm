/** @format */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Heap {
    constructor() {
        this.heap = [];
    }

    length() {
        return this.heap.length;
    }

    push(v) {
        this.heap.push(v);
        this.upHeap(this.heap.length - 1);
    }

    pop() {
        if (this.length() <= 0) return;

        if (this.length() === 1) {
            return this.heap.pop();
        }

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.downHeap(0);

        return root;
    }

    upHeap(child) {
        if (child <= 0) return;

        let parent = Math.floor((child - 1) / 2);

        if (this.heap[child] < this.heap[parent]) {
            [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
            this.upHeap(parent);
        }
    }

    downHeap(parent) {
        let left = parent * 2 + 1;
        let right = left + 1;

        if (left >= this.length()) return;

        if (right < this.length() && this.heap[right] < this.heap[left]) {
            left = right;
        }

        if (this.heap[parent] > this.heap[left]) {
            [this.heap[parent], this.heap[left]] = [this.heap[left], this.heap[parent]];
            this.downHeap(left);
        }
    }
}

const minQ = new Heap();
const maxQ = new Heap();
const map = new Map();

function cleanMin() {
    while (minQ.length() > 0 && !map.has(minQ.heap[0])) {
        minQ.pop();
    }
}

function cleanMax() {
    while (maxQ.length() > 0 && !map.has(maxQ.heap[0] * -1)) {
        maxQ.pop();
    }
}

const ans = [];

let idx = 0;
let endLine = 0;

rl.on("line", (line) => {
    if (idx === 0) {
        idx++;
        return;
    }

    if (idx > endLine) {
        endLine = +line + idx++;
        minQ.heap = [];
        maxQ.heap = [];
        map.clear();
        return;
    }

    let [op, num] = line.split(" ");
    num = Number(num);

    switch (op) {
        case "I":
            minQ.push(num);
            maxQ.push(num * -1);

            if (map.get(num) > 0) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }

            break;

        case "D":
            let del;
            if (num === 1) {
                cleanMax();
                del = maxQ.pop() * -1;
            }
            if (num === -1) {
                cleanMin();
                del = minQ.pop();
            }

            if (map.get(del) > 0) {
                map.set(del, map.get(del) - 1);
                if (map.get(del) === 0) map.delete(del);
            }

            if (map.size === 0) {
                minQ.heap = [];
                maxQ.heap = [];
            }
            break;
    }

    if (idx === endLine) {
        if (map.size === 0) {
            ans.push("EMPTY");
        } else {
            cleanMax();
            cleanMin();
            ans.push(`${maxQ.heap[0] * -1} ${minQ.heap[0]}`);
        }
    }

    idx++;
});

rl.on("close", () => {
    console.log(ans.join("\n"));
});