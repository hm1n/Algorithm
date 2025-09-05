function solution(arr) {
    let x = arr.length;
    let y = arr[0].length;
    
    if (x > y) {
        let diff = x - y;
        return arr.map((e, _) => { 
            for (let i = 0; i < diff; i++)
                e.push(0)
            return e;
        });
        
    } else {
        let diff = y - x;
        let row = Array(y).fill(0);
        for (let i = 0; i < diff; i++) arr.push(row);
        return arr;
    }
    
}