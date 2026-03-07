function solution(jobs) {
    var answer = 0;
    jobs = jobs.sort((a, b) => a[0] - b[0]);
    
    const tasks = jobs.map((e, i) => ({index: i, request: e[0], cost: e[1]}));
    const queue = new MinHeap((a, b) => {
        if (a.cost !== b.cost) return a.cost - b.cost;
        if (a.request !== b.request) return a.request - b.request;
        return a.index - b.index;
    })
    let disc = null;
    let ms = 0;
    
    while (true) {
        if (disc === null && tasks.length === 0 && queue.isEmpty()) break;
        
        while (tasks.length > 0 && tasks[0].request === ms) {
            queue.push(tasks.shift());
        }
        
        if (disc !== null && (ms - disc.start) === disc.cost) {
            answer += ms - disc.request;
            disc = null;
        }
        
        if (disc === null && !queue.isEmpty()) {
            disc = {...queue.pop(), start: ms};   
        }
        ms++;
    }
    answer = Math.floor(answer / jobs.length);
    return answer;
}

class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    push(e) {
        this.heap.push(e);
        this.bubbleUp();
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        
        return root;
    }
    
    bubbleUp() {
        let idx = this.heap.length - 1;
        
        while (idx > 0) {
            const parent = Math.floor((idx - 1) / 2);
            
            if (parent < 0) break;
            
            if (this.compare(this.heap[parent], this.heap[idx]) <= 0) break;
            
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    
    bubbleDown() {
        let idx = 0;
        const len = this.heap.length;
        
        while (idx < len) {
            let child = idx * 2 + 1;
            
            if (child >= len) break;
            
            if (child + 1 < len) {
                if (this.compare(this.heap[child], this.heap[child + 1]) > 0) {
                    child++;
                }
            }
            
            if (this.compare(this.heap[child], this.heap[idx]) >= 0) break;
            
            [this.heap[child], this.heap[idx]] = [this.heap[idx], this.heap[child]];
            idx = child;
        }
    }
}