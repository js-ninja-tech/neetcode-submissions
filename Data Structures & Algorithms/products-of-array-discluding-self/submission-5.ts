class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let prefix = [];
        let suffix = [];
        let result = [];
        prefix[0] = 1;
        for(let i =1; i< nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1]
        }   
        suffix[nums.length -1] = 1;

        for(let i =nums.length -2; i >= 0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1]
        }

        for(let i=0; i < nums.length; i++) {
            result[i] = prefix[i] * suffix[i]
        }

        return result;
    }
}
