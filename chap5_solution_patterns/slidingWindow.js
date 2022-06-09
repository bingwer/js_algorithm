// sliding window parrern
// 규모가 큰 데이터셋에서 데이터의 하위 집합을 추적하는 문제에 유용하다

/*
    예시문제 : 정수의 배열과, key값이 주어진다. key값만큼의 연속한 갯수의 숫자를
더해서 가장 큰 경우를 찾으시오

maxSumbarrySum([1,2,5,2,8,1,5], 2) => 10
maxSumbarrySum([1,2,5,2,8,1,5], 4) => 17
maxSumbarrySum([4,2,1,6], 1) => 6
maxSumbarrySum([], 4) => null

*/

function maxSumbarrySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
} // O(n^2)

maxSumbarrySum([1, 2, 5, 2, 8, 1, 5], 2);

function maxSumbarrySumRefactor(arr, sum) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // 기준 위치에서 한칸 앞으로 이동한 합은 한칸 이동한 숫자를 더하고 맨앞자리 수를 뺴는것
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
} // O(n)
