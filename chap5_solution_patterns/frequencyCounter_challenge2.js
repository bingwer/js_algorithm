// 두개의 숫자가 같이 길이와 각 숫자의 빈도가 동일한지 체크하시오.

function sameFrequency(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return false;
  const str1 = String(num1);
  const str2 = String(num2);

  if (str1.length !== str2.length) return false;

  const fq = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    fq[letter] = (fq[letter] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!fq[letter]) {
      return false;
    } else {
      fq[letter]--;
    }
  }

  return true;
}

console.log(sameFrequency(1313, 1133));

//solution
function sameFrequencySol(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
