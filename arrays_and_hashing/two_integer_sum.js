class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */

  // 時間計算量：O(n²), 空間計算量：O(1)
  twoSumByBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) return [i, j];
      }
    }

    return [];
  }

  // 時間計算量：O(n), 空間計算量：O(n)
  twoSumByHashmap(nums, target) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
      hashmap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
      const m = hashmap[target - nums[i]];
      if (m && m !== i) return [i, m];
    }

    return [];
  }
}
