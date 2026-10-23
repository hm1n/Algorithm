/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const isDigit = Array.from({length: logs.length}, () => 0);
    const contents = [];
    const identifiers = [];

    const letters = [];
    const digits = [];
    for (let i = 0; i < logs.length; i++) {
        const words = logs[i].split(" ").filter((_, i) => i > 0);
        const identifier = logs[i].split(" ")[0];

        contents.push(words.join(" "));
        identifiers.push(identifier);

        if (Number(words[0]) >= 0) {
            isDigit[i] = 1;
            digits.push(logs[i]);
        } else {
            letters.push(logs[i]);
        }
    }

    const result = logs
        .map((v, i) => [v, isDigit[i], contents[i], identifiers[i]])
        .sort((a, b) => {
            if (a[1] !== b[1]) return a[1] - b[1];
            if (a[1] === 1) return 0;
            return a[2].localeCompare(b[2]) || a[3].localeCompare(b[3])
            })
        .map(([v]) => v);
    
    return result;
};