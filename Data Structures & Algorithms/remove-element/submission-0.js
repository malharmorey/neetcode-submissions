class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
         let x = 0;
    for (let i = 0; i < nums.length; i++) {
        // shift element to left if its not equal to val
        if (nums[i] != val) { // we are not using (nums[i] === val) stratergy because we want to accumulate all the values which are not equal to given val at the start of array. 
            nums[x] = nums[i]
            x += 1;
        }
    }
    console.log(nums);

    return x
    }
}
