class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsFreq = new Map<number, number>()
        const result = []
        for(const num of nums) {
            numsFreq.set(num, (numsFreq.get(num) || 0) + 1)

        }

        const bucket = Array(nums.length +1).fill(undefined).map(() => []);
        for( const [key, value] of numsFreq) {
            bucket[value].push(key)
        }

        for(let i = bucket.length -1; i >= 0 && result.length <k; i-- ) {
            if(bucket[i] && bucket[i].length) {
                result.push(...bucket[i])
            }
        }
        return result.slice(0, k)
    }
}
