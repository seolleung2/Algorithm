/**
 * Median of Two Sorted Arrays (2개의 정렬된 배열 사이의 중앙값?)
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 크기 (배열의 길이) m 과 n 의 정렬된 배열 nums1 과 nums2 가 각각 있다.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 정렬된 두 배열의 중앙 값을 찾아라. 전체 실행 시간 복잡도는 O(log(m+n))여야 한다.
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * Find the median from two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/**
 * 시간 복잡도 O(1) 의 방법으로 풀기
 * Example 1:
 * nums1 = [1, 3] >>>>> 1 + 3 = 4, >>>>>> 4 / 2 = 2
 * nums2 = [2] >>>>> 2
 * 2 + 2 / 2  median is 2 (납득 가능)
 *
 * Example 2:
 * nums1 = [1, 2] >>>>> 1 + 2 = 3, >>>>> 3 / 2 = 1.5
 * nums2 = [3, 4] >>>>> 3 + 4 = 7, >>>>> 7 / 2 = 3.5
 *
 * The median is (2 + 3)/2 = 2.5
 */

// 풀이 방법 1. O(1) 시간 복잡도
let nums1 = [1, 2];
let nums2 = [3, 4];

function median(nums1, nums2) {
  let arr = nums1.concat(nums2);
  //   console.log(arr);
  let sum = 0;
  arr.map((el) => (sum = sum + el));
  return sum / arr.length;
}

let answer = median(nums1, nums2);
console.log(answer);

/**
 * Reference Code
 * Find the median from two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const k = Math.floor((nums1.length + nums2.length) / 2);

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (findKth(nums1, nums2, k) + findKth(nums1, nums2, k + 1)) / 2;
  } else {
    return findKth(nums1, nums2, k + 1);
  }
};

/**
 * Find the k-th number from two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
const findKth = (nums1, nums2, k) => {
  const m = nums1.length;
  const n = nums2.length;

  if (m > n) {
    return findKth(nums2, nums1, k);
  }

  if (m === 0) {
    return nums2[k - 1];
  }

  if (k === 1) {
    return Math.min(nums1[0], nums2[0]);
  }

  const c1 = Math.min(Math.floor(k / 2), m);
  const c2 = k - c1;

  if (nums1[c1 - 1] === nums2[c2 - 1]) {
    return nums1[c1 - 1];
  } else if (nums1[c1 - 1] < nums2[c2 - 1]) {
    return findKth(nums1.slice(c1), nums2, k - c1);
  } else {
    return findKth(nums1, nums2.slice(c2), k - c2);
  }
};

export default findMedianSortedArrays;
