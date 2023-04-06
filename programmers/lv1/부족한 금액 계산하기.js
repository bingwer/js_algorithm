function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  return totalPrice <= money ? 0 : totalPrice - money;
}

console.log(solution(3, 20, 4)); // 10
