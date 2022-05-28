function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const fq1 = {};
  const fq2 = {};

  for (let i = 0; i < str1.length; i++) {
    fq1[str1.charAt(i)] = (fq1[str1.charAt(i)] || 0) + 1;
    fq2[str2.charAt(i)] = (fq2[str2.charAt(i)] || 0) + 1;
  }

  for (let key in fq1) {
    if (!(key in fq2)) return false;
    if (fq1[key] !== fq2[key]) return false;
  }

  return true;
}

console.log(validAnagram('abcd', 'cdab'));
console.log(validAnagram('aabb', 'abbb'));
console.log(validAnagram('aabb', 'bbaa'));
console.log(validAnagram('aabb', 'bba'));

//solution
function validAnagram_sol(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram_sol('anagrams', 'nagaramm'));
console.log(validAnagram_sol('aaba', 'baaa'));
