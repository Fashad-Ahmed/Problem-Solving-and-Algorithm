/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // [2,3,5,1,3]
    // const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    // for (let i = 0; i < candies.length; i++) {
    //     newCandies[i] = candies[i] + extraCandies;
    // }
    // for (let i = 0; i < newCandies.length; i++) {
    //     for (let j = 0; j < candies.length; j++) {
    //         if (newCandies[i] > candies[j]) {
    //             newCandies[i] = true;
    //         } else {
    //             newCandies[i] = false;
    //         }
    //     }
    // }

    var newCandies = [];
    for (var i = 0; i < candies.length; i++) {
        candies[i] + extraCandies >= Math.max(...candies) ?
            newCandies.push(true) :
            newCandies.push(false)
    }
    return newCandies;
};
