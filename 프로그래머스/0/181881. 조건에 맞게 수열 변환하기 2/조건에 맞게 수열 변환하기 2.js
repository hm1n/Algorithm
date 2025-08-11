function changeArr(arr) {
    return arr.map(num => {
        if (num >= 50 && !(num % 2)) return num / 2;
        if (num < 50 && num % 2) return num * 2 + 1;
        return num;
        
    })
}

function solution(arr) {
    let x = 0;
    let newArr;
    
    while (true) {
        let flag = 1;
        
        newArr = arr.map(num => {
            if (num >= 50 && !(num % 2)) {
                flag = 0;
                return num / 2;
            }
            if (num < 50 && num % 2) {
                flag = 0;
                return num * 2 + 1;
            }
            return num;
        })
        
        if (flag === 1) {
            break;
        } 
        
        x += 1;
        arr = newArr;
    }
    
    return x;
}