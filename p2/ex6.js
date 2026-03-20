const students = [
  { name: "Kim", scores: [85, 92, 78] },
  { name: "Lee", scores: [88, 76, 92] },
  { name: "Park", scores: [90, 95, 80] }
];

const studentsWithAvg = students.map(student => {
  const sum = student.scores.reduce((acc, cur) => acc + cur, 0);
  const avg = sum / student.scores.length;

  return {
    name: student.name,
    average: avg
  };
});

console.log(studentsWithAvg);