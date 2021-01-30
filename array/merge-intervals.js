/**
 * Merge Intervals
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * intervals (간격) 의 배열들이 주어졌다 할 때, 겹치게 되는 모든 간격을 병합하라.
 *
 * For example,
 * Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

// ! 파라미터로 주어지는 것은 인터벌 배열 콜렉션이다.

const merge = (intervals) => {
  // ? Edge Case 다루기 >>>>> 들어온 컬렉션 배열의 길이가 달랑 1 이라면?
  if (intervals.length < 2) {
    return intervals;
  }
  // ? collection 들이 정렬되지 않은채로 들어왔을 때에 대한 정리
  intervals.sort((a, b) => a[0] - b[0]);

  const resultIntervals = []; // our result to return

  let startTime = intervals[0][0]; // our first interval position 1 >>> 8
  let endTime = intervals[0][1]; // our first interval position 3 >>> 6 >>> 10

  // 시작과 끝을 이미 0으로 지정했기 때문에 i 를 1부터 시작
  for (let i = 1; i < intervals.length; i++) {
    let currStart = intervals[i][0]; // 2 >>> 8 >>> 15
    let currEnd = intervals[i][1]; // 6 >>> 10 >>> 18

    if (currStart <= endTime) {
      // 2 <= 3, true // 8 <= 6, false (else 로 내려감) // 15 <= 10 false (else 로 내려감)
      endTime = Math.max(endTime, currEnd); // endTime = Math.max(3, 6), 즉 6으로 재할당된다.
    } else {
      resultIntervals.push([startTime, endTime]); // [1, 6] 을 넣는다. // [8, 10] 을 넣는다.
      startTime = currStart; // startTime = 8 이 재할당 // startTime = 15 가 재할당
      endTime = currEnd; // endTime = 10 이 재할당 // endTime = 18 이 재할당
    }
  }
  resultIntervals.push([startTime, endTime]); // 반복을 빠져나와서 결과 배열에 [15, 18] 을 넣는다.
  return resultIntervals; // resultIntervals 리턴, [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
};

let collection = [
  [8, 10],
  [1, 3],
  [2, 6],
  [15, 18],
];

let answer = merge(collection);

console.log(answer);

// Reference Code
const merge = (intervals) => {
  // Step 1. sort the intervals by start time
  intervals.sort((a, b) => a.start - b.start);

  // Step 2. go through the intervals
  let i = 0;

  for (let j = 1; j < intervals.length; j++) {
    const curr = intervals[i];
    const next = intervals[j];

    if (next.start <= curr.end) {
      curr.end = Math.max(curr.end, next.end);
    } else {
      intervals[++i] = next;
    }
  }

  return intervals.slice(0, i + 1);
};
