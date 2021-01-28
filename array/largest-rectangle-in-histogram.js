// import Stack from "common/stack";
/**
 * Largest Rectangle in Histogram : 히스토그램에서 가장 큰 정사각형
 *
 * Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the
 * area of largest rectangle in the histogram.
 *
 * 각 막대의 너비가 1인 히스토그램의 막대 높이를 나타내는 음이 아닌 정수가 주어지고,
 * 이제 히스토그램에서 가장 큰 사각형의 영역을 찾아라.
 * Example:
 *
 * Input: [2,1,5,6,2,3]
 * Output: 10
 */

/**
 * @param {number[]} heights
 * @return {number}
 */

// numArr = [2,1,5,6,2,3] 이 주어졌을 때,
// const largestRectangleArea = (numArr) => {
//   // input your code below
//   let currentRec;
//   let width = 1; // 2
//   // 배열의 요소 하나 하나가 바로 높이 (height) 이다.
//   for (let i = 0; i < numArr.length; i++) {
//     if (width <= numArr[i]) {
//       currentRec = currentRec * 2;
//       width = width + 1;
//       continue;
//     } else if (width > numArr[i]){
//         currentRec = 0;
//         width = width -1;
//     }
//   }
//   return currentRec;
// };

// let numArr = [2, 1, 5, 6, 2, 3];
// let answer = largestRectangleArea(numArr);

// console.log(answer);

const largestRectangleArea = (numArr) => {
  let maxArea = 0;
  let minHeight = 0;

  for (let i = 0; i < numArr.length; i++) {
    maxArea = Math.max(numArr[i], maxArea);
    minHeight = numArr[i];
    for (let j = i - 1; j < 0; j--) {
      minHeight = Math.min(numArr[j], minHeight);
      width = j - i + 1;
      maxArea = Math.max(maxArea, minHeight * width);
    }
  }
  return maxArea;
};

let numArr = [2, 1, 5, 6, 2, 3];
// let answer = largestRectangleArea(numArr);
largestRectangleArea(numArr);
// console.log(typeof answer);
