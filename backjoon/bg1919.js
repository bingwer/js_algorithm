import * as readline from 'node:readline';
/*
두 영어 단어가 철자의 순서를 뒤바꾸어 같아질 수 있을 때, 그러한 두 단어를 서로 애너그램 관계에 있다고 한다. 
예를 들면 occurs 라는 영어 단어와 succor 는 서로 애너그램 관계에 있는데, occurs의 각 문자들의 순서를 잘 바꾸면 succor이 되기 때문이다.

한 편, dared와 bread는 서로 애너그램 관계에 있지 않다. 하지만 dared에서 맨 앞의 d를 제거하고, 
bread에서 제일 앞의 b를 제거하면, ared와 read라는 서로 애너그램 관계에 있는 단어가 남게 된다.

두 개의 영어 단어가 주어졌을 때, 두 단어가 서로 애너그램 관계에 있도록 만들기 위해서 제거해야 하는 
최소 개수의 문자 수를 구하는 프로그램을 작성하시오. 문자를 제거할 때에는 아무 위치에 있는 문자든지 제거할 수 있다.

입력
첫째 줄과 둘째 줄에 영어 단어가 소문자로 주어진다. 각각의 길이는 1,000자를 넘지 않으며, 적어도 한 글자로 이루어진 단어가 주어진다.
*/

//const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(getNumberOfDeleteText(String(input[0]), String(input[1])));
  process.exit();
});

function getNumberOfDeleteText(str1, str2) {
  if (str1.length > 1000 || str2.length > 1000) return false;

  const fq1 = {};
  const fq2 = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    fq1[letter] = (fq1[letter] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    fq2[letter] = (fq2[letter] || 0) + 1;
  }

  let longStr = str1.length >= str2.length ? str1 : str2;
  const shortStr = str1.length >= str2.length ? str2 : str1;

  for (let i = 0; i < shortStr.length; i++) {
    // 길이가 작은 문자열 만큼 순회
    if (longStr.indexOf(shortStr[i]) !== -1) {
      // 해당 문자열이 존재한다면 각각 갯수에서 1씩 빼준다
      fq1[shortStr[i]]--;
      fq2[shortStr[i]]--;

      //중복 검색을 방지하기위해 해당 문자열을 바꿔준다.
      longStr = longStr.replace(shortStr[i], '');
    }
  }

  return (
    Object.values(fq1).reduce((a, b) => a + b) +
    Object.values(fq2).reduce((a, b) => a + b)
  );
}

// 리팩토링
function getNumberOfDeleteText2(str1, str2) {
  if (str1.length > 1000 || str2.length > 1000) return false;

  let longStr = str1.length >= str2.length ? str1 : str2;
  const shortStr = str1.length >= str2.length ? str2 : str1;
  let cnt = 0;

  for (let i = 0; i < shortStr.length; i++) {
    if (longStr.indexOf(shortStr[i]) !== -1) {
      longStr = longStr.replace(shortStr[i], '');
    } else {
      cnt++;
    }
  }
  return cnt + longStr.length;
}

/*

강의에서 배운 frequencyCounter를 사용해보려고 비슷한 문제인 애너그램 문제를 선택하여서 적용하였다.
풀고나니 굳이 fq까지 쓸 필요가 없어서 리팩토링 해보았다.

*/
