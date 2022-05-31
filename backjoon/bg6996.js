import * as readline from 'node:readline';
/*
두 단어 A와 B가 주어졌을 때, A에 속하는 알파벳의 순서를 바꾸어서 B를 만들 수 있다면, A와 B를 애너그램이라고 한다.

두 단어가 애너그램인지 아닌지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수(<100)가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 100을 넘지 않는 단어가 공백으로 구분되어서 주어진다. 단어는 알파벳 소문자로만 이루어져 있다.
3
blather reblath
maryland landam
bizarre brazier


출력
각 테스트 케이스마다 애너그램인지 아닌지를 예체 출력과 같은 형식으로 출력한다. 

출력 형식
정확한 출력 형식은 제출에서 언어를 Java로 설정하면 확인할 수 있다.
System.out.println(first + " & " + second + " are " + (solveAnagrams(first, second) ? "anagrams." : "NOT anagrams."));
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
  isAnagram([...input.slice(1)]);
  process.exit();
});

function isAnagram(arr) {
  outer: for (let i = 0; i < arr.length; i++) {
    const fq1 = {};
    const fq2 = {};
    const firstLetter = String(arr[i]).split(' ')[0];
    const secondLetter = String(arr[i]).split(' ')[1];

    if (firstLetter.length !== firstLetter.length) {
      console.log(firstLetter + ' & ' + secondLetter + ' are NOT anagrams.');
      continue outer;
    }

    for (let j = 0; j < firstLetter.length; j++) {
      fq1[firstLetter[j]] = (fq1[firstLetter[j]] || 0) + 1;
    }

    for (let k = 0; k < secondLetter.length; k++) {
      fq2[secondLetter[k]] = (fq2[secondLetter[k]] || 0) + 1;
    }

    for (let key in fq1) {
      if (fq1[key] !== fq2[key]) {
        console.log(firstLetter + ' & ' + secondLetter + ' are NOT anagrams.');
        continue outer;
      }
    }
    console.log(firstLetter + ' & ' + secondLetter + ' are anagrams.');
  }
}

/*

중첩 for문에서 for문에 key값을 지정하여 해당 for문을 continue또는 break 할 수 있다.

const sortedA = A.split("").sort().join("");
const sortedB = B.split("").sort().join("");

sortedA === sortedB ? true : false;

string을 array로 바꿔서 array를 sort해서 다시 하나의 문자열로 만든다.

*/
