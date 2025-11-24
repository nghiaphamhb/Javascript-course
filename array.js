// khởi tạo mảng
const student = ["Pham", "Dang", "Trung", "Nghia", "Pham"];
const student2  = new Array();

// == Array's method ==
console.log(student.length);

console.log(student.reverse());  // Dao nguoc thu tu phan tu 

console.log(student.join(" ")) // nối các ptu trong array -> chuỗi 
console.log(student.join())   // mac dinh noi = dau ','

console.log("Kiem tra phan tu 'Pham': " + student.includes("Pham"));  // kiem tra phan tu trong mang

console.log("Kiem tra first index cua phan tu \"Pham\": " + student.indexOf("Pham"));
console.log("Kiem tra last index cua phan tu \"Pham\": " + student.lastIndexOf("Pham"));

console.log("Them ptu vao cuoi mang tai index: " + student.push("Hieu"));
console.log("Them ptu vao dau mang tai index: " + student.unshift("Hello"));

