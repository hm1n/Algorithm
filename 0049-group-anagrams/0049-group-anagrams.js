/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for (let s of strs) {
        const sorted = s.split('').sort().join('');
        if (!map.has(sorted)) {
            map.set(sorted, [s]);
        } else {
            map.set(sorted, [...map.get(sorted), s]);
        }
    }
    return [...map.values()]
};