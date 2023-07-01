/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ')
        .map(item => item.trim())
        .filter(item => item !== '')
        .reverse()
        .join(' ')
};
