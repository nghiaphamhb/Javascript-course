// ==== In this file we have ====
// 1. elNode.classList.add(nameClass)
// 2. elNode.classList.remove(nameClass)
// 3. elNode.classList.contains(nameClass) -> return Boolean
// 4. elNode.classList.toggle(nameClass)
// 5. elNode.classList.toggle(nameClass, force)
// 6. elNode.className = ""
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

// 5. elNode.classList.toggle(className, force)
// force (boolean) -> việc thêm/xóa class phụ thuộc vào giá trị của force (chứ kp lật lại mặt giá trị như bth)
// true → bắt buộc thêm class
// false → bắt buộc xóa class
icon.classList.toggle("fa-caret-up", isOpen);
// Nếu isOpen === true → thêm class fa-caret-up
// Nếu isOpen === false → xóa class fa-caret-up

// 6. selector.className -> chuỗi các class của selector
console.log(container.className);
container.className = "a b c"; // thay thế các classes 

// 7. Toggle sidebar
const sidebar = document.querySelector(".sidebar");
sidebar.classList.add("hide");