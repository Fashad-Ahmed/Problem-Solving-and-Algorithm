/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i];

        if(map[target-n] >= 0){         // i=1; map[target-n] = map[8] = non-existent goes to else
            return [map[target-n],i]
        } 
        else {
            map[n] = i;             // use map to store the value and index position
        }
    }
};


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
