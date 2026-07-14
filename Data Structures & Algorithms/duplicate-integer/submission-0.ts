class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let found = false;
        const freqMap = new Map<number, number>;
        for(let i =0; i< nums.length ; i++) {
            if(freqMap.has(nums[i])) {
                found = true;
                return found;
            }

            freqMap.set(nums[i], 1)
        }

        return found;

    }
}
