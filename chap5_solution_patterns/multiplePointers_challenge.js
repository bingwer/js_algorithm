// 정렬된 배열 내의 유일한 숫자의 갯수 출력

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }

  return left + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));

function countUniqueValuesSolv(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
countUniqueValuesSolv([1, 2, 2, 5, 7, 7, 99]);
