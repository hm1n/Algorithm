/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcp;
    let LCP = [];

    for (let i = 1; i <= strs[0].length; i++) {
        lcp = strs[0].slice(0, i);
            
        isLcp = 1;
        for (let k = 1; k < strs.length; k++) {
            if (lcp !== strs[k].slice(0, i)) {
                isLcp = 0;
            }
        }

        if (isLcp) LCP.push(lcp);
    }

    if (LCP.length === 0) {
        return "";
    }

    LCP.sort((a, b) => b.length - a.length);
    return LCP[0];
};