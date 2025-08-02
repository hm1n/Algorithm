function solution(my_string, queries) {
    for (let [s, e] of queries) {
        var reverse_string = '';
        
        for (let i = e; i >= s; i--) {
            reverse_string += my_string[i]
        }
        
        my_string = my_string.slice(0, s) + reverse_string + my_string.slice(e + 1, my_string.length)
    }
    return my_string;
}