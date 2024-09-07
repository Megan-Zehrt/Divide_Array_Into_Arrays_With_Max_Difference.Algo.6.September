// 2966. Divide Array Into Arrays With Max Difference



// You are given an integer array nums of size n where n is a multiple of 3 and a positive integer k.

// Divide the array nums into n / 3 arrays of size 3 satisfying the following condition:

// The difference between any two elements in one array is less than or equal to k.
// Return a 2D array containing the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.









/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    
    let res = []

    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i += 3) {
        // Form a group of 3 elements
        let group = [nums[i], nums[i + 1], nums[i + 2]];

        // Check if the difference between the max and min in this group is <= k
        if (Math.max(...group) - Math.min(...group) > k) {
            return []; // If condition is not satisfied, return an empty array
        }

        // Add the group to the result
        res.push(group);
    }

    return res
};