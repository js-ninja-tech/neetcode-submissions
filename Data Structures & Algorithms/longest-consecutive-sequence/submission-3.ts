class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if(nums.length === 0) {
            return 0;
        }
        const numSet = new Set<number>(nums);
        let maxSequence = 0;
        for(const n of numSet) {
            if(!numSet.has(n - 1)) {
                let currentNum = n;
                let currentStreak = 1;
                while(numSet.has(currentNum + 1)) {
                    currentNum += 1;
                    currentStreak += 1;
                }
                maxSequence = Math.max(maxSequence, currentStreak);
            }
        }
        return maxSequence;
    }
}
