/**
 * @param {string} s
 * @return {number}
 */

const isUnique = str => new Set(str).size === str.length;

const lengthOfLongestSubstring = s => {
    let ret = '';
    for (let i = 0; i < s.length; i++) {
        for (j = i+1; j <= s.length; j++) {
            const str = s.slice(i, j);
            if (isUnique(str) && str.length > ret.length) {
                ret = str;
            }
        }
    }
    return ret.length;
};