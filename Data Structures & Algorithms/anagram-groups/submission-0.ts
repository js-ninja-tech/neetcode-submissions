class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const charFreq = new Map<string, string[]>()
    
        for(const str of strs) {
            const chars = Array(26).fill(0)
            for (const c of str) {
                const asci = c.charCodeAt(0) - 97;
                chars[asci]++;
            }
            const key = chars.join('#');
            if(charFreq.has(key)) {
                charFreq.get(key).push(str);
            } else {
            charFreq.set(key, [str]);

            }
        }

        return Array.from(charFreq.values())
    }
}
