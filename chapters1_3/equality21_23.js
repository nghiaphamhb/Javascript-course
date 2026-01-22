// Toán tử so sánh > < >= <=
console.log(5 > 7); // false
console.log(50 > 7); // true
console.log(50 < 7); // false
console.log(6 >= 6); // true
console.log(6 <= 6); // true

// == loose equality vs === strict equality
console.log("=== vs ==");
console.log(10 == "10"); // "10" == "10" -> type coercion: ép number về string theo thứ tự ưu tiên 
console.log(true == 1); // Number(true) = 1 -> 1 == 1 -> true
console.log(1 == "01"); // Number("01") -> 1 -> 1 == 1 -> true
console.log(null == ""); // "null" != "" -> false
console.log(typeof 10); // number
console.log(typeof "10"); // string
console.log(10 === "10"); // false
console.log(10 !== "10"); // true
console.log(true == "true"); // false

// => Khi làm việc khuyến khích dùng “===” và “!==”