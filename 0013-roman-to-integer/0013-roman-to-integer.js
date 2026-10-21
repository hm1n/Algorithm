/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    const rDict = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    };

    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        while (s[i] === s[i + 1]) {
            sum += dict[s[i]];
            i++;
        }

        if (rDict[s[i] + s[i + 1]]) {
            sum += rDict[s[i] + s[i + 1]];
            i++;
        } else {
            sum += dict[s[i]];
        }
    }
    return sum;
};