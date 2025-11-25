// const animals = ["tiger", "lion", "horse", "elephant"];

// slice() tao mang moi y het mang ban dau
// const animals2 = animals.slice();
// console.log(animals2);

// // slice(start); start -> vi tri index bat dau trong array
// console.log(animals.slice(1));
// console.log(animals.slice(-1));  // last element

// // slice(start, end); start -> (end -1) index
// console.log(animals.slice(1, 3));

// splice() - xoa hoac thay the phan tu 
// console.log(animals.splice(2));

// splice(start, deletedCount)  - lay x ptu tu chuoi goc vao chuoi moi; bat dau tu start index
// const deletedAnimals = animals.splice(0, 2); // deletedAnimals lay 2 ptu tu index 0 cua animals
// console.log(animals);

// splice(start, deletedCount, item1, item2, ...)  
// -> lay x ptu tu chuoi goc vao chuoi moi va thay the chung = cac ptu moi
// const deletedAnimals2 = animals.splice(1, 2, "cow", "butterfly");
// console.log(animals);  // animals now 

// const random = [1, 9999, 10, 5, 9];
// // console.log(random.sort(function (a, b) {
// //     if(a > b) return 1;  // sort(1) thuc hien doi cho
// //     else return -1;     // sort(-1) ko thuc hien doi cho 
// // }));

// console.log(random.sort((a, b) =>  a > b ? 1 : -1) );

// find: tra ve ptu dau tien trong mang thoa man dieu kien
const random = [1, 9999, 10, 5, 9];
// tim ptu dau tien trong mang lon hon 10
// const findYourNumber = random.find((element, index) => element > 10);
// console.log(findYourNumber); // ko tim thay tra undefine

// findIndex : tra lai index tim dc  
// const findYourIndex = random.findIndex((element, index) => element > 10);
// console.log(findYourIndex); // ko tim thay tra -1

// map: Mục đích chính: tạo ra mảng mới từ mảng cũ, với mỗi phần tử đã được biến đổi.
// Luôn trả về một mảng mới có cùng độ dài.
// const listNumber = [1, 2, 3, 4, 5];
// const listNumberDouble = listNumber.map((value, index, array) => {
//     return value * 2;
// });

// console.log(listNumberDouble);

// // forEach : chạy một đoạn code với từng phần tử 
// // -> Không trả về mảng mới, giá trị trả về là undefined. (nhu map)
// listNumber.forEach((value, index, array) => {
//     listNumber[index] = value * 3;
// });

// console.log(listNumber);


// filter: 
// const listNumber = [1, 2, 3, 4, 5];
// const filteredNumber = listNumber.filter((value, index, array) => {
//     return value > 3;
// });  // filter (true) -> run ; filter(false) -> skip

// console.log(filteredNumber);

// const listNumber = [1, 2, 3, 4, 5];
// console.log(listNumber.some((value) => value > 3)); // some return true if co it nhat 1 ptu thoa man
// console.log(listNumber.every((value) => value > 3));  // every return true if tat ca ptu deu thoa man 

// reduce: gom cac ptu trong mang lai thanh 1
// reduce ( arrow function(a, b))
const listNumber = [1, 2, 3, 4, 5];
const totalNumber = listNumber.reduce((previousValue, currentValue) => {
    console.log(previousValue, currentValue);
    return previousValue + currentValue;
});
console.log(totalNumber);

