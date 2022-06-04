// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// const input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   isAnagram([...input.slice(1)]);
//   process.exit();
// });

function isanagram(input) {
  const inputArr = [...input.sort()];

  const sortedArr = [...input.map((word) => word.split('').sort().join(''))];

  let pointer1 = 0;

  let pointer2 = 1;

  const anagramArr = [];

  while (pointer1 < sortedArr.length) {
    const tempArr = [];

    while (pointer2 < sortedArr.length) {
      if (sortedArr[pointer1] === sortedArr[pointer2]) {
        tempArr.push(inputArr[pointer2]);
        sortedArr.splice(pointer2, 1);
        inputArr.splice(pointer2, 1);
      } else {
        pointer2++;
      }
    }
    tempArr.push(inputArr[pointer1]);
    anagramArr.push(tempArr.sort());
    pointer1++;
    pointer2 = pointer1 + 1;
  }

  anagramArr.sort(function compare(a, b) {
    return b.length - a.length;
  });

  anagramArr.slice(0, 5).map((arr) => {
    console.log(
      `Group of size ${arr.length}: ${[...new Set(arr)].join(' ')} .`
    );
  });
}

isanagram([
  'undisplayed',
  'trace',
  'tea',
  'singleton',
  'eta',
  'eat',
  'displayed',
  'crate',
  'cater',
  'carte',
  'caret',
  'beta',
  'beat',
  'bate',
  'ate',
  'abet',
]);

// 개선할 방법이 있을것같은데 현재 실력으로는 잘 모르겠다...
