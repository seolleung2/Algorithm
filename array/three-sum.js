/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * // ? n개의 정수들이 담긴 배열 nums 가 주어지면 a, b, c 가 a + b + c = 0이 되도록 하는 요소가 배열 num에 있는가? 배열에서 0의 합을 제공하는 모든 고유한 세 쌍둥이를 찾습니다.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * // ? 중복은 안돼
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

let nums = [-1, 0, 1, 2, -1, -4];

function threeSum(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  //   return result;
  //   return result.sort();
  //   return result.map((arr) => JSON.stringify(arr.sort()));
  let result2 = result.map((arr) => JSON.stringify(arr.sort()));

  //   let set = new Set(result2);
  //   return set;
  let result3 = result2.filter((el, idx) => {
    return result2.indexOf(el) === idx;
  });

  return result3.map((el) => JSON.parse(el));
}

let answer = threeSum(nums);

// let arr = answer.forEach((el) => console.log(typeof el));
console.log(answer);

// ! 문제점 : [ [ -1, 0, 1 ], [ -1, 2, -1 ], [ 0, 1, -1 ] ]
// ! 1. 그것은 바로 중복이 발생한다는 것이다.
// ! 2. 일단 result 를 돌며 각 요소 배열 마다 정렬을 시켜주자. 음냐..

// ! 3. result.map((arr) => arr.sort()); 의 결과 >>>>> [ [ -1, 0, 1 ], [ -1, -1, 2 ], [ -1, 0, 1 ] ]
// ! 4. 배열 비교를 위해서 JSON.stringify 로 변환함.. >>>>> [ '[-1,0,1]', '[-1,-1,2]', '[-1,0,1]' ]
// ! 5. 나온 배열에 filter 로 중복 제거함.
// ! 6. JSON.parse 로 문자열 모양을 떼고 배열로 변신시킴
