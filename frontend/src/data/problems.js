export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}

console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9))); // Expected: [0,1]
console.log(JSON.stringify(twoSum([3, 2, 4], 6)));       // Expected: [1,2]
console.log(JSON.stringify(twoSum([3, 3], 6)));          // Expected: [0,1]`,

      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))       # Expected: [1, 2]
print(twoSum([3, 3], 6))          # Expected: [0, 1]`,

      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));       // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6)));          // Expected: [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
}

let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(JSON.stringify(test1)); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(JSON.stringify(test2)); // Expected: ["h","a","n","n","a","H"]`,

      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ['o', 'l', 'l', 'e', 'h']

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ['h', 'a', 'n', 'n', 'a', 'H']`,

      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]

        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here

}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car"));                     // Expected: false
console.log(isPalindrome(" "));                              // Expected: true`,

      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))                      # Expected: False
print(isPalindrome(" "))                               # Expected: True`,

      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car"));                     // Expected: false
        System.out.println(isPalindrome(" "));                              // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here

}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1]));                       // Expected: 1
console.log(maxSubArray([5,4,-1,7,8]));             // Expected: 23`,

      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))                        # Expected: 1
print(maxSubArray([5,4,-1,7,8]))              # Expected: 23`,

      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1}));                       // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));             // Expected: 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. Find two lines that together with the x-axis form a container, such that the container contains the most water.",
      notes: ["You may not slant the container."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here

}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1]));                 // Expected: 1`,

      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))                  # Expected: 1`,

      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1}));                 // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "two-sum-sorted": {
    id: "two-sum-sorted",
    title: "Two Sum - Sorted",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Given a sorted array nums, return indices of two numbers such that they add up to target.",
      notes: ["Use O(1) extra space.", "Return indices in any order."],
    },
    examples: [{ input: "nums = [1,2,3,4,6], target = 6", output: "[1,3]" }],
    constraints: ["2 ≤ nums.length ≤ 10^4", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: {
      javascript: `function twoSumSorted(nums, target) {
  // Write your solution here
}

console.log(JSON.stringify(twoSumSorted([1,2,3,4,6], 6))); // Expected: [1,3]`,

      python: `def twoSumSorted(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSumSorted([1,2,3,4,6], 6))  # Expected: [1, 3]`,

      java: `import java.util.*;

class Solution {
    public static int[] twoSumSorted(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSumSorted(new int[]{1,2,3,4,6}, 6))); // Expected: [1, 3]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3]",
      python: "[1, 3]",
      java: "[1, 3]",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Set",
    description: {
      text: "Given an array nums, return true if any value appears at least twice.",
      notes: [],
    },
    examples: [{ input: "nums = [1,2,3,1]", output: "true" }],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here

}

// Test cases
console.log(containsDuplicate([1,2,3,1]));    // Expected: true
console.log(containsDuplicate([1,2,3,4]));    // Expected: false`,

      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))   # Expected: True
print(containsDuplicate([1,2,3,4]))   # Expected: False`,

      java: `class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));  // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4}));  // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s.",
      notes: [],
    },
    examples: [{ input: 's = "anagram", t = "nagaram"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 5 * 10^4"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here

}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car"));         // Expected: false`,

      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))          # Expected: False`,

      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car"));         // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "move-zeroes": {
    id: "move-zeroes",
    title: "Move Zeroes",
    difficulty: "Easy",
    category: "Array • Two Pointers",
    description: {
      text: "Move all zeros to end while maintaining the relative order of non-zero elements.",
      notes: ["In-place"],
    },
    examples: [{ input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }],
    constraints: ["1 ≤ nums.length ≤ 10^4"],
    starterCode: {
      javascript: `function moveZeroes(nums) {
  // Write your solution here
}

let test1 = [0,1,0,3,12];
moveZeroes(test1);
console.log(JSON.stringify(test1)); // Expected: [1,3,12,0,0]`,

      python: `def moveZeroes(nums):
    # Write your solution here
    pass

# Test cases
test1 = [0,1,0,3,12]
moveZeroes(test1)
print(test1)  # Expected: [1, 3, 12, 0, 0]`,

      java: `import java.util.*;

class Solution {
    public static void moveZeroes(int[] nums) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] test1 = {0,1,0,3,12};
        moveZeroes(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [1, 3, 12, 0, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,3,12,0,0]",
      python: "[1, 3, 12, 0, 0]",
      java: "[1, 3, 12, 0, 0]",
    },
  },

  "product-except-self": {
    id: "product-except-self",
    title: "Product Except Self",
    difficulty: "Medium",
    category: "Array",
    description: {
      text: "Return an array where each element is the product of all elements except itself.",
      notes: ["No division allowed"],
    },
    examples: [{ input: "nums = [1,2,3,4]", output: "[24,12,8,6]" }],
    constraints: ["2 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
}

console.log(JSON.stringify(productExceptSelf([1,2,3,4]))); // Expected: [24,12,8,6]`,

      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]`,

      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
    }
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]",
      python: "[24, 12, 8, 6]",
      java: "[24, 12, 8, 6]",
    },
  },

  "longest-substring": {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    description: {
      text: "Return the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [{ input: 's = "abcabcbb"', output: "3" }],
    constraints: ["1 ≤ s.length ≤ 10^5"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here

}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Expected: 3`,

      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))     # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))    # Expected: 3`,

      java: `class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb"));    // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew"));   // Expected: 3
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [],
    },
    examples: [{ input: 's = "()[]{}"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 10^4"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here

}

// Test cases
console.log(isValid("()[]{}"));  // Expected: true
console.log(isValid("(]"));      // Expected: false
console.log(isValid("([)]"));    // Expected: false`,

      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))      # Expected: False
print(isValid("([)]"))    # Expected: False`,

      java: `class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()[]{}"));  // Expected: true
        System.out.println(isValid("(]"));      // Expected: false
        System.out.println(isValid("([)]"));    // Expected: false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Merge two sorted arrays nums1 and nums2 into nums1 in-place.",
      notes: [],
    },
    examples: [{ input: "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3", output: "[1,2,2,3,5,6]" }],
    constraints: ["1 ≤ n ≤ 10^4"],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
}

let nums1 = [1,2,3,0,0,0];
merge(nums1, 3, [2,5,6], 3);
console.log(JSON.stringify(nums1)); // Expected: [1,2,2,3,5,6]`,

      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

# Test cases
nums1 = [1,2,3,0,0,0]
merge(nums1, 3, [2,5,6], 3)
print(nums1)  # Expected: [1, 2, 2, 3, 5, 6]`,

      java: `import java.util.*;

class Solution {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] nums1 = {1,2,3,0,0,0};
        merge(nums1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(nums1)); // Expected: [1, 2, 2, 3, 5, 6]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]",
      python: "[1, 2, 2, 3, 5, 6]",
      java: "[1, 2, 2, 3, 5, 6]",
    },
  },

  "best-time-stock": {
    id: "best-time-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    description: {
      text: "Given an array prices where prices[i] is the price of a stock on day i, return the maximum profit you can achieve.",
      notes: [],
    },
    examples: [{ input: "prices = [7,1,5,3,6,4]", output: "5" }],
    constraints: ["1 ≤ prices.length ≤ 10^5"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here

}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1]));   // Expected: 0`,

      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))    # Expected: 0`,

      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));   // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "three-sum": {
    id: "three-sum",
    title: "Three Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Given an integer array nums, return all unique triplets such that their sum is zero.",
      notes: ["No duplicate triplets allowed"],
    },
    examples: [{ input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }],
    constraints: ["3 ≤ nums.length ≤ 3000"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here

}

// Test cases
console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // Expected: [[-1,-1,2],[-1,0,1]]`,

      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1, -1, 2], [-1, 0, 1]]`,

      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1, -1, 2], [-1, 0, 1]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]",
    },
  },

  "container-most-water": {
    id: "container-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "Find two lines that together form a container holding maximum water.",
      notes: [],
    },
    examples: [{ input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }],
    constraints: ["2 ≤ n ≤ 10^5"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here

}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1]));                 // Expected: 1`,

      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))                  # Expected: 1`,

      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1}));                 // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "subarray-sum-k": {
    id: "subarray-sum-k",
    title: "Subarray Sum Equals K",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    description: {
      text: "Return the number of subarrays whose sum equals k.",
      notes: [],
    },
    examples: [{ input: "nums = [1,1,1], k = 2", output: "2" }],
    constraints: ["1 ≤ nums.length ≤ 2 * 10^4"],
    starterCode: {
      javascript: `function subarraySum(nums, k) {
  // Write your solution here

}

// Test cases
console.log(subarraySum([1,1,1], 2)); // Expected: 2
console.log(subarraySum([1,2,3], 3)); // Expected: 2`,

      python: `def subarraySum(nums, k):
    # Write your solution here
    pass

# Test cases
print(subarraySum([1,1,1], 2))  # Expected: 2
print(subarraySum([1,2,3], 3))  # Expected: 2`,

      java: `class Solution {
    public static int subarraySum(int[] nums, int k) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(subarraySum(new int[]{1,1,1}, 2)); // Expected: 2
        System.out.println(subarraySum(new int[]{1,2,3}, 3)); // Expected: 2
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n2",
      python: "2\n2",
      java: "2\n2",
    },
  },

  "longest-consecutive": {
    id: "longest-consecutive",
    title: "Longest Consecutive Sequence",
    difficulty: "Medium",
    category: "Array • Hash Set",
    description: {
      text: "Return the length of the longest consecutive elements sequence.",
      notes: ["O(n) required"],
    },
    examples: [{ input: "nums = [100,4,200,1,3,2]", output: "4" }],
    constraints: ["0 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function longestConsecutive(nums) {
  // Write your solution here

}

// Test cases
console.log(longestConsecutive([100,4,200,1,3,2])); // Expected: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // Expected: 9`,

      python: `def longestConsecutive(nums):
    # Write your solution here
    pass

# Test cases
print(longestConsecutive([100,4,200,1,3,2]))       # Expected: 4
print(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))  # Expected: 9`,

      java: `class Solution {
    public static int longestConsecutive(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(longestConsecutive(new int[]{100,4,200,1,3,2}));      // Expected: 4
        System.out.println(longestConsecutive(new int[]{0,3,7,2,5,8,4,6,0,1})); // Expected: 9
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n9",
      python: "4\n9",
      java: "4\n9",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "Hash Table • String",
    description: {
      text: "Group all anagrams together from the given array of strings.",
      notes: [],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 10^4"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here

}

// Test cases
const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
const sorted = result.map(g => g.sort()).sort((a,b) => a[0].localeCompare(b[0]));
console.log(JSON.stringify(sorted)); // Expected: [["ate","eat","tea"],["bat"],["nat","tan"]]`,

      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
result = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
sorted_result = sorted([sorted(g) for g in result])
print(sorted_result)  # Expected: [['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]`,

      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<List<String>> result = groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"});
        result.forEach(Collections::sort);
        result.sort(Comparator.comparing(l -> l.get(0)));
        System.out.println(result); // Expected: [[ate, eat, tea], [bat], [nat, tan]]
    }
}`,
    },
    expectedOutput: {
      javascript: '[["ate","eat","tea"],["bat"],["nat","tan"]]',
      python: "[['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]",
      java: "[[ate, eat, tea], [bat], [nat, tan]]",
    },
  },

  "top-k-frequent": {
    id: "top-k-frequent",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    category: "Heap • Hash Map",
    description: {
      text: "Return the k most frequent elements.",
      notes: [],
    },
    examples: [{ input: "nums = [1,1,1,2,2,3], k = 2", output: "[1,2]" }],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
}

console.log(JSON.stringify(topKFrequent([1,1,1,2,2,3], 2))); // Expected: [1,2]
console.log(JSON.stringify(topKFrequent([1], 1)));            // Expected: [1]`,

      python: `def topKFrequent(nums, k):
    # Write your solution here
    pass

# Test cases
print(topKFrequent([1,1,1,2,2,3], 2))  # Expected: [1, 2]
print(topKFrequent([1], 1))             # Expected: [1]`,

      java: `import java.util.*;

class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(topKFrequent(new int[]{1,1,1,2,2,3}, 2))); // Expected: [1, 2]
        System.out.println(Arrays.toString(topKFrequent(new int[]{1}, 1)));             // Expected: [1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2]\n[1]",
      python: "[1, 2]\n[1]",
      java: "[1, 2]\n[1]",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Array • Binary Search",
    description: {
      text: "Given a sorted array nums and a target value, return the index if found, else -1.",
      notes: ["O(log n) required"],
    },
    examples: [{ input: "nums = [-1,0,3,5,9,12], target = 9", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 10^4"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([-1,0,3,5,9,12], 9));  // Expected: 4
console.log(search([-1,0,3,5,9,12], 2));  // Expected: -1`,

      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,

      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9));  // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2));  // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "search-rotated-array": {
    id: "search-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Array • Binary Search",
    description: {
      text: "Search target in a rotated sorted array.",
      notes: [],
    },
    examples: [{ input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" }],
    constraints: ["1 ≤ nums.length ≤ 10^4"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here

}

// Test cases
console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1`,

      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1`,

      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0)); // Expected: 4
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3)); // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
    },
  },

  "find-min-rotated": {
    id: "find-min-rotated",
    title: "Find Minimum in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Find the minimum element in a rotated sorted array.",
      notes: [],
    },
    examples: [{ input: "nums = [3,4,5,1,2]", output: "1" }],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function findMin(nums) {
  // Write your solution here

}

// Test cases
console.log(findMin([3,4,5,1,2]));     // Expected: 1
console.log(findMin([4,5,6,7,0,1,2])); // Expected: 0`,

      python: `def findMin(nums):
    # Write your solution here
    pass

# Test cases
print(findMin([3,4,5,1,2]))      # Expected: 1
print(findMin([4,5,6,7,0,1,2]))  # Expected: 0`,

      java: `class Solution {
    public static int findMin(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(findMin(new int[]{3,4,5,1,2}));      // Expected: 1
        System.out.println(findMin(new int[]{4,5,6,7,0,1,2}));  // Expected: 0
    }
}`,
    },
    expectedOutput: {
      javascript: "1\n0",
      python: "1\n0",
      java: "1\n0",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. Return the number of distinct ways to climb to the top.",
      notes: [],
    },
    examples: [{ input: "n = 3", output: "3" }],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here

}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,

      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,

      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "house-robber": {
    id: "house-robber",
    title: "House Robber",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Find the maximum amount you can rob without robbing two adjacent houses.",
      notes: [],
    },
    examples: [{ input: "nums = [2,7,9,3,1]", output: "12" }],
    constraints: ["1 ≤ nums.length ≤ 100"],
    starterCode: {
      javascript: `function rob(nums) {
  // Write your solution here

}

// Test cases
console.log(rob([1,2,3,1]));   // Expected: 4
console.log(rob([2,7,9,3,1])); // Expected: 12`,

      python: `def rob(nums):
    # Write your solution here
    pass

# Test cases
print(rob([1,2,3,1]))   # Expected: 4
print(rob([2,7,9,3,1])) # Expected: 12`,

      java: `class Solution {
    public static int rob(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(rob(new int[]{1,2,3,1}));   // Expected: 4
        System.out.println(rob(new int[]{2,7,9,3,1})); // Expected: 12
    }
}`,
    },
    expectedOutput: {
      javascript: "4\n12",
      python: "4\n12",
      java: "4\n12",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Return the fewest number of coins needed to make up the given amount. Return -1 if not possible.",
      notes: [],
    },
    examples: [{ input: "coins = [1,2,5], amount = 11", output: "3" }],
    constraints: ["1 ≤ amount ≤ 10^4"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here

}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3));      // Expected: -1`,

      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))       # Expected: -1`,

      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3));      // Expected: -1
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n-1",
      python: "3\n-1",
      java: "3\n-1",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph • DFS",
    description: {
      text: "Count the number of islands in a 2D grid where '1' is land and '0' is water.",
      notes: [],
    },
    examples: [
      { input: "grid = [['1','1','0'],['1','0','0'],['0','0','1']]", output: "2" },
    ],
    constraints: ["m,n ≤ 300"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here

}

// Test cases
console.log(numIslands([["1","1","0"],["1","0","0"],["0","0","1"]])); // Expected: 2
console.log(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]])); // Expected: 1`,

      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([["1","1","0"],["1","0","0"],["0","0","1"]]))  # Expected: 2
print(numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]))  # Expected: 1`,

      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(numIslands(new char[][]{{'1','1','0'},{'1','0','0'},{'0','0','1'}})); // Expected: 2
        System.out.println(numIslands(new char[][]{{'1','1','1'},{'0','1','0'},{'1','1','1'}})); // Expected: 1
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n1",
      python: "2\n1",
      java: "2\n1",
    },
  },

  "daily-temperatures": {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    difficulty: "Medium",
    category: "Stack",
    description: {
      text: "Given an array of temperatures, return an array where each element is the number of days until a warmer temperature. If no future warmer day exists, put 0.",
      notes: [],
    },
    examples: [{ input: "temps = [73,74,75,71,69,72,76,73]", output: "[1,1,4,2,1,1,0,0]" }],
    constraints: ["1 ≤ temps.length ≤ 10^5"],
    starterCode: {
      javascript: `function dailyTemperatures(temperatures) {
  // Write your solution here
}

console.log(JSON.stringify(dailyTemperatures([73,74,75,71,69,72,76,73]))); // Expected: [1,1,4,2,1,1,0,0]
console.log(JSON.stringify(dailyTemperatures([30,40,50,60])));              // Expected: [1,1,1,0]`,

      python: `def dailyTemperatures(temperatures):
    # Write your solution here
    pass

# Test cases
print(dailyTemperatures([73,74,75,71,69,72,76,73]))  # Expected: [1, 1, 4, 2, 1, 1, 0, 0]
print(dailyTemperatures([30,40,50,60]))               # Expected: [1, 1, 1, 0]`,

      java: `import java.util.*;

class Solution {
    public static int[] dailyTemperatures(int[] temperatures) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{73,74,75,71,69,72,76,73}))); // Expected: [1, 1, 4, 2, 1, 1, 0, 0]
        System.out.println(Arrays.toString(dailyTemperatures(new int[]{30,40,50,60})));              // Expected: [1, 1, 1, 0]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,1,4,2,1,1,0,0]\n[1,1,1,0]",
      python: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]",
      java: "[1, 1, 4, 2, 1, 1, 0, 0]\n[1, 1, 1, 0]",
    },
  },

  "valid-sudoku": {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Array • Hash Set",
    description: {
      text: "Determine if a 9x9 Sudoku board is valid based on the filled cells.",
      notes: [],
    },
    examples: [{ input: "board = [...]", output: "true" }],
    constraints: ["board is 9x9"],
    starterCode: {
      javascript: `function isValidSudoku(board) {
  // Write your solution here

}

// Test cases
const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];
console.log(isValidSudoku(board)); // Expected: true`,

      python: `def isValidSudoku(board):
    # Write your solution here
    pass

# Test cases
board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
print(isValidSudoku(board))  # Expected: True`,

      java: `class Solution {
    public static boolean isValidSudoku(char[][] board) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        char[][] board = {
            {'5','3','.','.','7','.','.','.','.'},
            {'6','.','.','1','9','5','.','.','.'},
            {'.','9','8','.','.','.','.','6','.'},
            {'8','.','.','.','6','.','.','.','3'},
            {'4','.','.','8','.','3','.','.','1'},
            {'7','.','.','.','2','.','.','.','6'},
            {'.','6','.','.','.','.','2','8','.'},
            {'.','.','.','4','1','9','.','.','5'},
            {'.','.','.','.','8','.','.','7','9'}
        };
        System.out.println(isValidSudoku(board)); // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true",
      python: "True",
      java: "true",
    },
  },

  "palindromic-substrings": {
    id: "palindromic-substrings",
    title: "Palindromic Substrings",
    difficulty: "Medium",
    category: "String • DP",
    description: {
      text: "Count all palindromic substrings in a given string.",
      notes: [],
    },
    examples: [{ input: 's = "aaa"', output: "6" }],
    constraints: ["1 ≤ s.length ≤ 1000"],
    starterCode: {
      javascript: `function countSubstrings(s) {
  // Write your solution here

}

// Test cases
console.log(countSubstrings("abc")); // Expected: 3
console.log(countSubstrings("aaa")); // Expected: 6`,

      python: `def countSubstrings(s):
    # Write your solution here
    pass

# Test cases
print(countSubstrings("abc"))  # Expected: 3
print(countSubstrings("aaa"))  # Expected: 6`,

      java: `class Solution {
    public static int countSubstrings(String s) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(countSubstrings("abc")); // Expected: 3
        System.out.println(countSubstrings("aaa")); // Expected: 6
    }
}`,
    },
    expectedOutput: {
      javascript: "3\n6",
      python: "3\n6",
      java: "3\n6",
    },
  },

  "min-window-substring": {
    id: "min-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    category: "Sliding Window",
    description: {
      text: "Find the smallest substring of s that contains all characters of t.",
      notes: [],
    },
    examples: [{ input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"' }],
    constraints: ["1 ≤ s.length ≤ 10^5"],
    starterCode: {
      javascript: `function minWindow(s, t) {
  // Write your solution here

}

// Test cases
console.log(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
console.log(minWindow("a", "a"));               // Expected: a`,

      python: `def minWindow(s, t):
    # Write your solution here
    pass

# Test cases
print(minWindow("ADOBECODEBANC", "ABC"))  # Expected: BANC
print(minWindow("a", "a"))               # Expected: a`,

      java: `class Solution {
    public static String minWindow(String s, String t) {
        // Write your solution here
        return "";
    }

    public static void main(String[] args) {
        System.out.println(minWindow("ADOBECODEBANC", "ABC")); // Expected: BANC
        System.out.println(minWindow("a", "a"));               // Expected: a
    }
}`,
    },
    expectedOutput: {
      javascript: "BANC\na",
      python: "BANC\na",
      java: "BANC\na",
    },
  },

  "clone-graph": {
    id: "clone-graph",
    title: "Clone Graph",
    difficulty: "Medium",
    category: "Graph • BFS",
    description: {
      text: "Return a deep copy of an undirected graph.",
      notes: [],
    },
    examples: [{ input: "adjList = [[2,4],[1,3],[2,4],[1,3]]", output: "[[2,4],[1,3],[2,4],[1,3]]" }],
    constraints: ["0 ≤ nodes ≤ 100"],
    starterCode: {
      javascript: `class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  // Write your solution here

}

// Test cases - build graph from adjList [[2,4],[1,3],[2,4],[1,3]]
function buildGraph(adjList) {
  if (!adjList.length) return null;
  const nodes = adjList.map((_, i) => new Node(i + 1));
  adjList.forEach((neighbors, i) => {
    nodes[i].neighbors = neighbors.map(n => nodes[n - 1]);
  });
  return nodes[0];
}
function graphToAdjList(node) {
  if (!node) return [];
  const visited = new Map();
  const queue = [node];
  visited.set(node.val, node);
  while (queue.length) {
    const curr = queue.shift();
    for (const nb of curr.neighbors) {
      if (!visited.has(nb.val)) { visited.set(nb.val, nb); queue.push(nb); }
    }
  }
  const result = [];
  for (let i = 1; i <= visited.size; i++) {
    result.push(visited.get(i).neighbors.map(n => n.val));
  }
  return result;
}
const cloned = cloneGraph(buildGraph([[2,4],[1,3],[2,4],[1,3]]));
console.log(JSON.stringify(graphToAdjList(cloned))); // Expected: [[2,4],[1,3],[2,4],[1,3]]`,

      python: `class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors or []

def cloneGraph(node):
    # Write your solution here
    pass

# Test cases
def build_graph(adj):
    if not adj: return None
    nodes = [Node(i+1) for i in range(len(adj))]
    for i, neighbors in enumerate(adj):
        nodes[i].neighbors = [nodes[n-1] for n in neighbors]
    return nodes[0]

def graph_to_adj(node):
    if not node: return []
    visited, queue = {}, [node]
    visited[node.val] = node
    while queue:
        curr = queue.pop(0)
        for nb in curr.neighbors:
            if nb.val not in visited:
                visited[nb.val] = nb
                queue.append(nb)
    return [sorted([n.val for n in visited[i].neighbors]) for i in range(1, len(visited)+1)]

cloned = cloneGraph(build_graph([[2,4],[1,3],[2,4],[1,3]]))
print(graph_to_adj(cloned))  # Expected: [[2, 4], [1, 3], [2, 4], [1, 3]]`,

      java: `import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node(int val) { this.val = val; this.neighbors = new ArrayList<>(); }
}

class Solution {
    public static Node cloneGraph(Node node) {
        // Write your solution here
        return null;
    }

    public static void main(String[] args) {
        int[][] adjList = {{2,4},{1,3},{2,4},{1,3}};
        Node[] nodes = new Node[adjList.length];
        for (int i = 0; i < adjList.length; i++) nodes[i] = new Node(i+1);
        for (int i = 0; i < adjList.length; i++)
            for (int n : adjList[i]) nodes[i].neighbors.add(nodes[n-1]);

        Node cloned = cloneGraph(nodes[0]);

        Map<Integer,Node> visited = new LinkedHashMap<>();
        Queue<Node> queue = new LinkedList<>();
        if (cloned != null) { queue.add(cloned); visited.put(cloned.val, cloned); }
        while (!queue.isEmpty()) {
            Node curr = queue.poll();
            for (Node nb : curr.neighbors)
                if (!visited.containsKey(nb.val)) { visited.put(nb.val, nb); queue.add(nb); }
        }
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 1; i <= visited.size(); i++) {
            List<Integer> nbs = new ArrayList<>();
            for (Node nb : visited.get(i).neighbors) nbs.add(nb.val);
            result.add(nbs);
        }
        System.out.println(result); // Expected: [[2, 4], [1, 3], [2, 4], [1, 3]]
    }
}`,
    },
    expectedOutput: {
      javascript: "[[2,4],[1,3],[2,4],[1,3]]",
      python: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
      java: "[[2, 4], [1, 3], [2, 4], [1, 3]]",
    },
  },

  "valid-parenthesis-string": {
    id: "valid-parenthesis-string",
    title: "Valid Parenthesis String",
    difficulty: "Medium",
    category: "Greedy • Stack",
    description: {
      text: "Check if a string with '(' ')' and '*' can form valid parentheses. '*' can be '(', ')' or empty.",
      notes: [],
    },
    examples: [{ input: 's = "(*)"', output: "true" }],
    constraints: ["1 ≤ s.length ≤ 100"],
    starterCode: {
      javascript: `function checkValidString(s) {
  // Write your solution here

}

// Test cases
console.log(checkValidString("(*)"));   // Expected: true
console.log(checkValidString("(*))"));  // Expected: true
console.log(checkValidString("((*)"));  // Expected: true`,

      python: `def checkValidString(s):
    # Write your solution here
    pass

# Test cases
print(checkValidString("(*)"))   # Expected: True
print(checkValidString("(*))"))  # Expected: True
print(checkValidString("((*)"))  # Expected: True`,

      java: `class Solution {
    public static boolean checkValidString(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(checkValidString("(*)"));   // Expected: true
        System.out.println(checkValidString("(*))"));  // Expected: true
        System.out.println(checkValidString("((*)"));  // Expected: true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\ntrue",
      python: "True\nTrue\nTrue",
      java: "true\ntrue\ntrue",
    },
  },

  "encode-decode": {
    id: "encode-decode",
    title: "Encode and Decode Strings",
    difficulty: "Medium",
    category: "String",
    description: {
      text: "Design an algorithm to encode a list of strings to a single string and decode it back.",
      notes: [],
    },
    examples: [{ input: '["hello","world"]', output: '["hello","world"]' }],
    constraints: ["1 ≤ strs.length ≤ 200"],
    starterCode: {
      javascript: `function encode(strs) {
  // Write your solution here

}

function decode(s) {
  // Write your solution here

}

// Test cases
const input = ["hello","world"];
const encoded = encode(input);
const decoded = decode(encoded);
console.log(JSON.stringify(decoded)); // Expected: ["hello","world"]`,

      python: `def encode(strs):
    # Write your solution here
    pass

def decode(s):
    # Write your solution here
    pass

# Test cases
input_strs = ["hello","world"]
encoded = encode(input_strs)
decoded = decode(encoded)
print(decoded)  # Expected: ['hello', 'world']`,

      java: `import java.util.*;

class Codec {
    public static String encode(List<String> strs) {
        // Write your solution here
        return "";
    }

    public static List<String> decode(String s) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        List<String> input = Arrays.asList("hello","world");
        String encoded = encode(input);
        List<String> decoded = decode(encoded);
        System.out.println(decoded); // Expected: [hello, world]
    }
}`,
    },
    expectedOutput: {
      javascript: '["hello","world"]',
      python: "['hello', 'world']",
      java: "[hello, world]",
    },
  },

  "max-subarray": {
    id: "max-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • DP",
    description: {
      text: "Find the subarray with the largest sum.",
      notes: [],
    },
    examples: [{ input: "nums = [-2,1,-3,4,-1,2,1]", output: "6" }],
    constraints: ["1 ≤ nums.length ≤ 10^5"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here

}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1])); // Expected: 6`,

      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1]))  # Expected: 6`,

      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1})); // Expected: 6
    }
}`,
    },
    expectedOutput: {
      javascript: "6",
      python: "6",
      java: "6",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
