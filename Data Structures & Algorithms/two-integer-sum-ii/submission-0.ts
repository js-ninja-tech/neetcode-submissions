class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0;
        let right = numbers.length -1;
        let result = [];
        while(left < right) {
            const sum = numbers[left] + numbers[right];
            if(sum == target) {
                result = [left +1, right + 1]
            } 
            if(sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return result
    }
}
