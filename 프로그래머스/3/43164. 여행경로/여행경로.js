function solution(tickets) {
    var answer = [];
    const G = new Map();
    const E = new Map();
    
    for (let [start, end] of tickets) {
        if (!G.get(start)) {
            G.set(start, []);
        }
        G.get(start).push(end);
        
        if (!E.get(`${start},${end}`)) {
            E.set(`${start},${end}`, 1);
        } else {
            E.set(`${start},${end}`, E.get(`${start},${end}`) + 1);  
        }
    }
    
    function getPaths(start) {
        const path = [];
        let eCount = tickets.length;
        
        function DFS(start){
            const ends = G.get(start);
        
            path.push(start);
            
            if (eCount === 0) {
                answer.push([...path]);
            } else if (ends && ends.length > 0) {
                for (let next of ends) {
                    if (E.get(`${start},${next}`) && E.get(`${start},${next}`) > 0) {
                        E.set(`${start},${next}`, E.get(`${start},${next}`) - 1);
                        eCount--;
                
                        DFS(next);
                
                        eCount++;
                        E.set(`${start},${next}`, E.get(`${start},${next}`) + 1);
                    
                    }
                }   
            }
            
            path.pop();
        }
        
        DFS(start);
    }
    
    getPaths('ICN');
    answer.sort((a, b) => a.join('').localeCompare(b.join('')));
    
    return answer[0];
}