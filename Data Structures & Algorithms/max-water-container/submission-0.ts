class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let cap = 0;
        while (left < right) {
            const width = right - left;
            const area = width * Math.min(heights[left], heights[right]);
            cap = Math.max(area, cap);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return cap;
    }
}
