function charCount(str) {
  // 주어진 문자열의 어떠한 문자가 몇개 쓰였는지 출력하는 예제(공백 제외)

  // 반환할 객체를 만든다
  const result = {};
  // 주어진 문자열을 루프
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // 해당 문자가 영문자 또는 숫자인지 확인한다.
      if (result[char] > 0) {
        // 문자가 반환 객체에 있는 경우 더한다, 반환객체에 없는경우 해당 문자를 결과객체에 추가하고 값을 1로 설정.
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
    // 알파벳이나 숫자가 아닌 경우 아무것도 하지 않는다.
  }

  // 결과객체을 반환한다
  console.log(result);
  return result;
}

function charCountRefact(str) {
  // 주어진 문자열의 어떠한 문자가 몇개 쓰였는지 출력하는 예제(공백 제외)

  // 반환할 객체를 만든다
  const result = {};
  // 주어진 문자열을 루프
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // 해당 문자가 영문자 또는 숫자인지 확인한다.
      // 문자가 반환 객체에 있는 경우 더한다, 반환객체에 없는경우 해당 문자를 결과객체에 추가하고 값을 1로 설정.
      result[char] = ++result[char] || 1;
    }
    // 알파벳이나 숫자가 아닌 경우 아무것도 하지 않는다.
  }

  // 결과객체을 반환한다
  console.log(result);
  return result;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // 숫자 (0-9)
    !(code > 64 && code < 91) && // 대문자(A-Z)
    !(code > 96 && code < 123) // 소문자(a-z)
  ) {
    return false;
  }
  return true;
}

charCount('hell o');
charCount('hell o1234');
charCount('hell OWsows');
charCountRefact('Hello 1234!');
