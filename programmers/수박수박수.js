function waterMelon(n) {
  if (n < 0) return;
  let result = '';
  const returnString = ['수', '박'];

  for (let i = 0; i < n; i++) {
    result += returnString[i % 2];
  }

  return result;
}
