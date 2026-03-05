function solution(scoville, K) {
    const heap = new MinHeap();
    var answer = 0;
    
    scoville.forEach((e) => {
        heap.push(e);
    })
        
        while (heap.heap.length > 1 && heap.heap[0] < K) {
            const first = heap.pop();
            const second = heap.pop();
            
            heap.push(first + second * 2);
              
            answer++;
        }
        
        if (heap.length() === 1 && heap.root() < K) return -1;
        
    return answer;
}

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    length() {
        return this.heap.length;
    }
    
    root() {
        return this.heap[0];
    }
    
    push(v) {
        this.heap.push(v);
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
            
            if (this.heap[parent] <= this.heap[idx]) break;
            
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }
    
    bubbleDown() {
        let idx = 0;
        const len = this.heap.length;
        
        while (true) {
            let child = idx * 2 + 1;
            
            if (child >= len) break;
            
            if (this.heap[child] > this.heap[child + 1]) {
                child++;    
            }
            
            if (this.heap[idx] < this.heap[child]) break;
            
            [this.heap[idx], this.heap[child]] = [this.heap[child], this.heap[idx]];
            idx = child;
        }
    }
}