// const items = ["apple", "banana", "orange", "apple", "banana", "banana"];

// const result = [...new Set(items)]  // Set으로 중복 제거 후
//   .reduce((acc, item) => {
//     acc[item] = items.filter(i => i === item).length;  // 각 아이템의 등장 횟수 계산
//     return acc;
//   }, {});

// console.log(result);
// // 출력: { apple: 2, banana: 3, orange: 1 }

// const classes = [
//   [
//     { name: '민수', submitted: true, scores: [80, 90] },
//     { name: '지연', submitted: false, scores: [100, 70] }
//   ],
//   [
//     { name: '도윤', submitted: true, scores: [85, 95] }
//   ]
// ];

// // 식 작성
// const submittedScores = 


// console.log(submittedScores); // [80, 90, 85, 95]
// console.log(average);         // 87.5



const users = [
  { id: 1, profile: { nickname: 'mango' }, point: 0 },
  { id: 2, profile:  { nickname: 'soda' }, point: 0 },
  { id: 3, profile: null, point: 15 },
  { id: 5, profile: { nickname: 'apple' }, point: null },
  { id: 4, profile: null, point: 1 }
];

users.sort((a, b) => {
  const pointA = a.point;
  const pointB = b.point;
  if (pointB !== pointA) return pointB - pointA;

  const nameA = a.profile;
  const nameB = b.profile;
  return nameA.localeCompare(nameB);
});

console.log(users);