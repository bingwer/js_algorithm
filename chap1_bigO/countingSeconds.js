// 코드 시간 재기

function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <=n; i++) {
        total += i;
    }
    return total;
}

function addUpTo2(n) {
    return n*(n+1) /2;
}

console.log(addUpTo(6));
console.log(addUpTo2(6))

const t1 = performance.now();
//addUpTo(10000000000);
addUpTo2(10000000000);
const t2 = performance.now();

console.log(`${(t2-t1) / 1000}초`);

/*

시간을 재는것의 문제

1. 기기의 사양에 좌우된다.
2. 같은 기기임에도 같은 코드가 다른 시간이 걸릴 수가 있다.
3. 빠른 알고리즘의 경우 정말 빠르기 때문에 속도 측정 정확도가 충분하지 않을 수 있다.
4. 테스트에 정말 오래 걸리는 코드가 있을 수 있다.

--> 이러한 문젤르 해결하는것이 big-O

*/