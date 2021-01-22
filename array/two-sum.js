/**
 * Two Sum
 *
 * Given an array of integers, return  {such that they add up to a specific target.
 * // ? 정수들의 배열이 주어지고, 두 숫자의 인덱스를 반환하여 (인덱스의 값) 특정 목표값에 합산합니다.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * // ? 각 입력에 정확히 하나의 솔루션이 있다고 가정할 수 있으며 동일한 요소를 두 번 사용할 수 없습니다.
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15, 18];
// n 개의 숫자 배열에서, 두 숫자를 더하는 경우의 수는
// 2 + 7, 2 + 11, 2 + 15, 7 + 11, 7 + 15, 11 + 15 (6가지 경우)
// 위의 경우에서는 즉 (n - 1)! >>>>>>> 3! 3 * 2 * 1 === 6

// 맨 앞의 수 nums[0] 은, nums[0] + nums[1], nums[0] + nums[2], nums[0] + nums[3] 까지 더할 수 있다.

// 그 다음 수 nums[1] 은, nums[1] + nums[2], nums[1] + nums[3]

// 그 다음 수 nums[2] 는, nums[2] + nums[3]

// 이 모든 경우의 수에서 (6가지), target (9) 이 되는 경우의 수를 if 로 뽑아낸다.

// // map, filter 배열함수를 써볼 수도 있잖은가? 그리고 찾은 수의 indexOf 또는 includes
// function twoSum(nums, target) {
//   let resultArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let sum = nums[i] + nums[j];

//       if (sum === target) {
//         resultArr.push(i);
//         resultArr.push(j);
//       }
//     }
//   }
//   return resultArr;
// }

// let answer = twoSum(nums, 18);

// console.log(answer);

/**
 * Reference Code
 *
 * let nums = [2, 7, 11, 15, 18];
 * target = 9 라고 가정하고 아래 코드를 보자
 */

const twoSum = (nums, target = 9) => {
  const map = {}; // 1) 빈 객체를 만들었다.

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i]; // 2) target 이 9 라면,
    // 2) 이 때 another 는 9 - 2 = 7, 4) 그 다음엔 9 - 7 = 2
    if (another in map) {
      // 5) another = 2 가 여기서 걸린다. map 객체의 키로 존재한다!
      return [map[another], i]; // 현재 map 객체 형태는 { 2 : 0 }, 그러므로 [0, 1] 리턴 된다. 끝!
    }

    map[nums[i]] = i; // 3) 선언한 객체 map 의 형태는, { 2 : 0 }
  }

  return null;
};

export { twoSum };
