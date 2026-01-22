// type coercion
// + - * / 
// Các dấu này ép dữ liệu về kiểu Number
// Tuy chỉ có dấu ‘+’ ép về kiểu theo thứ hạng ưu tiên: string>number (điểm kỳ lạ)

console.log(10 + 10);  // 20
console.log(10 + "10"); // String(10) + "10" = "1010"
console.log("10" + 10); // "1010"
console.log(null + ""); // "null"
console.log(null + undefined); // 0 + NaN = NaN
console.log(null + 10); // 0 + 10 = 10

console.log("10" - 10); // 0 ; Number("10") - 10
console.log("" - 1); // Number("") -> 0 -> 0 - 1 = -1
console.log(false - true); // 0 - 1 = -1