// 2개의 배열을 허용하는 same이라는 함수를 작성하라. 배열의 모든 값이 두 번째 배열에 해당하는 값을 가지면 참을 반환해야 한다.
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    let findedIndex = arr2.indexOf(arr1[i] ** 2);
    if (findedIndex === -1) return false;
    arr2.splice(findedIndex, 1); // 중복값 판단
  }
  return true;
}
// 시간복잡도 O(n**2) -> indexOf도 반복문

//console.log(same([1, 2, 3], [1, 4, 9]));
//console.log(same([1, 2, 3], [1, 4]));

function sameReactors(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    // 키 값 비교로 arr1의 제곱수가 arr2에 있는지 확인
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // value값 비교로 해당 숫자의 갯수가 동일한지 확인
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
// 시간복잡도 : O(n)

console.log(sameReactors([1, 2, 3, 3], [1, 4, 9, 9]));
