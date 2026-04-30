class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i],i);
    }

    for (let j = 0; j < nums.length; j++) {
        let val = target - nums[j];
        if (map.has(val) && map.get(val) !== j) {
            return [map.get(val),j]
        }
    }
    }
}
