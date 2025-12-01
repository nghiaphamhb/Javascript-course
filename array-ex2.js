// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. 
// Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. 
// Gợi ý giá trị falsy là 0 null undefined false "" NaN
const firstArr = [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]];
const trueArr = firstArr.filter(item => Boolean(item));
// console.log(trueArr);


// 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. 
// Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
const secondArr = [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]];
const result = secondArr.flat(2);  // flattern array
// console.log(result);

// 3. Đảo ngược số nguyên. Ví dụ 1234 -> 4321, -567 -> -765
function reverseInteger(num) {
    let value = num.toString().split('').reverse().join('');  
    console.log('Number to reverted string: ' + value);   // 765-
    value = parseInt(value);
    console.log('Reverted string to number: ' + value);  // 765
    value = value * Math.sign(num);
    return value;  // -765
}

// console.log(reverseInteger(-567));

