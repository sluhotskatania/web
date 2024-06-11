const student = {
    name: 'Kilian',
    age: 18,
    gender: 'male'
}

const { name: studentName, age: studentAge, gender: studentGender } = student;

console.log(studentName);
console.log(studentAge);
console.log(studentGender);