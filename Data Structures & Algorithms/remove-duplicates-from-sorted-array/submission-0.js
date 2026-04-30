class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let x= 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x +=1;
            nums[x] = nums[i] // here we are overwriting the x position with copy of unique element, thats why the lenght or input and output arr remains same
        }
    }
    return x+1
    }
}
