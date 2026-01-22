// A. clone array
const students = ["a", "b", "c", "d", "e"];
// 1. sử dụng phương thức slice()
const sliceStudents = students.slice();
console.log(sliceStudents );

// 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);


// B. merge array
// [1,2] [3,4] [5,6] -> [1,2,3,4,5,6]

// 1. array1.concat(array2, array3, arrayN);
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray);

// 2. spread operator
// [...array]
const mergeArray2 = [...array1, ...array2, ...array3];
console.log(mergeArray2);


// C. destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const [ball, sword, arrrow] = toys;
console.log(ball, sword, arrrow);


// D. rest parameter
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const [ball, ...rest] = toys;
console.log(rest); // "sword", "arrow", "magic", "water", "fire"
// rest parameter ...
function demo(a, ...rest) {
  console.log(a, rest);
}
demo(1, 2, 3, 4, 5);  // 1,  {2, 3, 4, 5}


// E. for( of )
for(let value of array){  // duyet qua tung phan tu trong array
	value += 2;
	console.log(value);
}