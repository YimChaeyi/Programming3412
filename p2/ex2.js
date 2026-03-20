const students = [
  { name: "Kim", age: 21 },
  { name: "Lee", age: 18 },
  { name: "Park", age: 23 }
];

const result = students
  .filter(student => student.age >= 20)
  .map();
console.log(result);

//const adultstudent = [...students].filter(students => students.age>=20);
//console.log(adultStudents);