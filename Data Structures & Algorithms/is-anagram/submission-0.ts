class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        let sMap = new Map();
        let tMap = new Map();
        for (let i of s) {
            if (sMap.has(i)) {
                sMap.set(i, sMap.get(i) + 1);
            } else {
                sMap.set(i, 1);
            }
        }

        for (let i of t) {
            if (tMap.has(i)) {
                tMap.set(i, tMap.get(i) + 1);
            } else {
                tMap.set(i, 1);
            }
        }

        for (const [key, value] of sMap) {
            if(!tMap.has(key)) {
                return false;
            }

            const tMapValue = tMap.get(key);
            if (tMapValue !== value) {
                return false;
            }
        }
        return true;
    }
}
