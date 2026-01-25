// ==== In this file we have ====
// 1. selector.classList.add(nameClass)
// 2. selector.classList.remove(nameClass)
// 3. selector.classList.contains(nameClass)
// 4. selector.classList.toggle(nameClass)
// 5. selector.className = ""
// ==============================

// 1. selector.classList.add(nameClass)
const container = document.querySelector(".container");
container.classList.add("is-active");

// 2. selector.classList.remove(nameClass)
container.classList.remove("container");

// 3. selector.classList.contains(nameClass)
console.log(container.classList.contains("container")); // false

// 4. selector.classList.toggle(nameClass)
// hoạt động giống XOR : 1 & 0 = 1 ; 1 & 1 = 0 
// nếu có chứa class thì xóa đi
// nếu ko chứa class thì thêm vào
container.classList.toggle("is-active");

// 5. selector.className -> chuỗi các class của selector
console.log(container.className);
container.className = "a b c"; // thay thế các classes 

// 6. Toggle sidebar
const sidebar = document.querySelector(".sidebar");
sidebar.classList.add("hide");