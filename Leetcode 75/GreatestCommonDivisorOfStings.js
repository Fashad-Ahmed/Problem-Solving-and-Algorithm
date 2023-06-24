/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcd(a, b) {
    if (b) {
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}
var gcdOfStrings = function (str1, str2) {
    return (
        str1 + str2 == str2 + str1
    ) ? str1.substr(0, gcd(str1.length, str2.length)) : "";
};
