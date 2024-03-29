/*
문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다.
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	    return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]

입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.

*/
function solution(answers) {
  // 1번 [1,2,3,4,5];
  // 2번 [2,1,2,3,2,4,2,5];
  // 3번 [3,3,1,1,2,2,4,4,5,5];

  // answer의 길이만큼 반복되는걸 맞는지 확인

  const peopleAnswers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const correctAnswer = new Map();

  peopleAnswers.forEach((peopleAnswer, peopleIndex) => {
    answers.forEach((answer, answerIndex) => {
      if (answer === peopleAnswer[answerIndex % peopleAnswer.length]) {
        if (correctAnswer.has(peopleIndex + 1)) {
          correctAnswer.set(
            peopleIndex + 1,
            correctAnswer.get(peopleIndex + 1) + 1
          );
        } else correctAnswer.set(peopleIndex + 1, 1);
      }
    });
  });

  const answer = [];

  let max = 0;

  [...correctAnswer.entries()].forEach(([people, correct]) => {
    if (correct > max) max = correct;
  });

  if (max === 0) return [1, 2, 3];

  [...correctAnswer.entries()].sort().forEach(([people, correct]) => {
    if (max === correct) answer.push(+people);
  });

  return answer;
}

console.log(solution([1, 2, 3, 1, 2, 2, 2, 3, 4, 5, 8]));

/*

테스트 1 〉	통과 (0.18ms, 29.7MB)
테스트 2 〉	통과 (0.18ms, 29.7MB)
테스트 3 〉	통과 (0.18ms, 29.7MB)
테스트 4 〉	통과 (0.19ms, 29.3MB)
테스트 5 〉	통과 (0.20ms, 30.1MB)
테스트 6 〉	통과 (0.20ms, 29.9MB)
테스트 7 〉	통과 (19.43ms, 32.4MB)
테스트 8 〉	통과 (0.48ms, 29.9MB)
테스트 9 〉	통과 (21.72ms, 32.3MB)
테스트 10 〉	통과 (21.31ms, 32.3MB)
테스트 11 〉	통과 (2.78ms, 32.8MB)
테스트 12 〉	통과 (20.29ms, 32.4MB)
테스트 13 〉	통과 (0.30ms, 30MB)
테스트 14 〉	통과 (2.84ms, 32.7MB)

테스트 1 〉	통과 (0.20ms, 30.2MB)
테스트 2 〉	통과 (0.15ms, 29.8MB)
테스트 3 〉	통과 (0.17ms, 30.1MB)
테스트 4 〉	통과 (0.17ms, 30MB)
테스트 5 〉	통과 (0.20ms, 30MB)
테스트 6 〉	통과 (0.26ms, 30.2MB)
테스트 7 〉	통과 (1.88ms, 31.8MB)
테스트 8 〉	통과 (0.53ms, 30.1MB)
테스트 9 〉	통과 (2.83ms, 32.6MB)
테스트 10 〉	통과 (1.06ms, 30.1MB)
테스트 11 〉	통과 (3.76ms, 31.9MB)
테스트 12 〉	통과 (2.63ms, 32.7MB)
테스트 13 〉	통과 (0.32ms, 30.1MB)
테스트 14 〉	통과 (3.00ms, 32.7MB)
*/
