/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/[!?',;. ]/).filter(Boolean);
    const map = new Map();

    for (let w of words) {
        let isBanned = 0;
        for (let b of banned) {
            if (w === b) {
                isBanned = 1; 
                break;
            }
        }
        
        if (!isBanned) {
            if (map.has(w)) map.set(w, map.get(w) + 1);
            else map.set(w, 1);
        }
    }

    const keys = [...map.keys()];
    const values = [...map.values()];
    const max = Math.max(...values);

    for (let i = 0; i < keys.length; i++) {
        if (values[i] === max) return keys[i];
    }
    return "";
};