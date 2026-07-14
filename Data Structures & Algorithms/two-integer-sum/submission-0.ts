class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const comMap = new Map();

        for(let i =0; i< nums.length; i++) {
            const compliment = target - nums[i];

            if(comMap.has(compliment)) {
                return ([comMap.get(compliment), i])
            }

            comMap.set(nums[i], i)
        }
        
    }
}
