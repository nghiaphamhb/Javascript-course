const student = {
  name: "Pham",
  age: 27,
  male: true,
  "last-name": "Nghia",
};

// optional chaining : 
console.log(student?.name?.prefix);

// destructuring object
const { name, age, male, ...rest } = student;
console.log(rest);