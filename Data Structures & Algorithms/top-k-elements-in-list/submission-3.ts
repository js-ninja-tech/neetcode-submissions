class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencies = new Map<number, number>();
        for (const n of nums) {
            frequencies.set(n, (frequencies.get(n) || 0) + 1);
        }

        const bucket: number[][] = Array(nums.length + 1).fill(undefined).map(() => []);
        for(const [num, freq] of frequencies) {
            bucket[freq].push(num);
        }

        const result = [];
        for(let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
            if(bucket[i] && bucket[i].length > 0) result.push(...bucket[i])
        }

        return result.slice(0, k)
    }
}
