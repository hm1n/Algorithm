/** @format */
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\r?\n/);

function solution(input) {
    class Heap {
        constructor(compare) {
            this.heap = [];
            this.compare = compare;
        }

        size() {
            return this.heap.length;
        }

        push(v) {
            this.heap.push(v);
            this.upHeap();
        }

        pop() {
            if (this.heap.length === 0) return;

            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            const root = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.downHeap();
            return root;
        }

        upHeap() {
            let leaf = this.heap.length - 1;
            let parent = Math.floor((leaf - 1) / 2);

            while (parent >= 0) {
                if (this.compare(this.heap[parent], this.heap[leaf])) {
                    break;
                }

                [this.heap[parent], this.heap[leaf]] = [this.heap[leaf], this.heap[parent]];
                leaf = parent;
                parent = Math.floor((leaf - 1) / 2);
            }
        }

        downHeap() {
            let root = 0;
            let child = root * 2 + 1;

            while (child < this.heap.length) {
                if (child + 1 < this.heap.length) {
                    if (this.compare(this.heap[child + 1], this.heap[child])) {
                        child++;
                    }
                }
                if (this.compare(this.heap[root], this.heap[child])) {
                    break;
                }

                [this.heap[root], this.heap[child]] = [this.heap[child], this.heap[root]];
                root = child;
                child = root * 2 + 1;
            }
        }
    }
    const N = +input[0];
    const ans = [];

    function compare(a, b) {
        if (Math.abs(a) < Math.abs(b)) return true;
        if (Math.abs(a) > Math.abs(b)) return false;
        return a < b;
    }

    const Q = new Heap(compare);

    for (let i = 0; i < N; i++) {
        const x = +input[1 + i];
        if (x === 0) {
            if (Q.size()) {
                ans.push(Q.pop());
            } else {
                ans.push(0);
            }
        } else {
            Q.push(x);
        }
    }
    console.log(ans.join("\n"));
}

solution(input);