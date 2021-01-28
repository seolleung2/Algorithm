/**
 * Plus One
 *
 * Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
 * 양의 정수가 비어 있지 않은 자릿수 배열로 표시되며, 여기에 정수를 더한 값이 있다.
 *
 * You may assume the integer do not contain any leading zero, except the number 0 itself.
 * 정수에 0 자체를 제외하고 선행 0이 포함되어 있지 않다고 가정할 수 있습니다. 즉, 배열의 맨 앞에 0 이 못온다 이말인듯.
 *
 * The digits are stored such that the most significant digit is at the head of the list.
 * 숫자는 가장 중요한 숫자가 목록의 맨 앞에 오도록 저장됩니다.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 *
 * Example 2:
 *
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (numArr) => {
  charDigits = numArr.map((num) => String(num));
  console.log(charDigits); // ? [ '4', '3', '2', '1' ] 의 형태로 변신시켰다.
  let joinNumber = charDigits.join(""); // 4321 의 형태, 하지만 여전히 문자타입이다.
  let realNumber = Number(joinNumber); // 숫자로 바꾸고,
  console.log(typeof realNumber); // 이제 4321 은 사천삼백이십일 의 숫자이다.

  realNumber = realNumber + 1; // ? 본론으로 들어와서 이제 4321 에 1을 더해준다.
  // ? 이제 볼일 다 봤으니, realNumber 문자열로 바꾸자.
  strNumber = String(realNumber);
  console.log(strNumber);
  console.log(typeof strNumber);
  let charDigits2 = strNumber.split(""); // [ '4', '3', '2', '2' ] 로 변신시켰다.
  console.log(charDigits2);

  return charDigits2.map((num) => Number(num));
};

let arr = [4, 3, 2, 1];
let arr2 = [1, 2, 3];
let answer = plusOne(arr2);

console.log(answer);
