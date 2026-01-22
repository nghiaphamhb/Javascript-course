// By value vs By referrences
// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); // true
// By referrences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); // false

// Khi so sánh num1 và num2 đó là so sánh by value (so sánh giá trị của 2 biến đó) → kết quả true 
// Khi so sánh arr1 và arr2 như trong code, ta đang so sánh địa chỉ của ptu đầu tiên trong 2 mảng đó (by referrences) ⇒ kết quả false hiển nhiên 