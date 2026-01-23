// this nó sẽ đề cập tới object gần nhất
const student2 = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "tuan",
  hi: function () {
    console.log(`my name is ${this.name} and i am ${this.age} years old`);
  },
};

student2.hi();