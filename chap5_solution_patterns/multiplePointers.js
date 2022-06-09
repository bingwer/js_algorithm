// 포인터 변수는 배열이나 문자열의 특정 위치를 가르킨다.

// 정렬된 배열을 받아서 더해서 0이 되는 숫자를 찾아라. 리턴되는 array는 해당 숫자의 쌍을 반환하거나 undefiend.

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
} // O(n2)

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

function sumZeroRefact(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }
} // O(n)

console.log(sumZeroRefact([-4, -3, -2, -1, 0, 1, 2, 5]));
