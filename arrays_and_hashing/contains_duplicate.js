class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    let hashmap = {};

    for (let i = 0; i < nums.length; i++) {
      if (hashmap[nums[i]] === 1) return true;
      hashmap[nums[i]] = 1;
    }

    return false;
  }
}
