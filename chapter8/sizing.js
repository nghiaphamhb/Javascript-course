// ==== In this file we have ====
// 1. offsetWidth, offsetHeight, offsetLeft, offsetTop, offsetParent 
// 2. clientWidth, clientHeight, clientLeft, clientTop
// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
// 4. elNode.getBoundingClientRect()
// ==============================

// 1. offsetWidth, offsetHeight, offsetLeft, offsetTop, offsetParent 
const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // độ rộng của phần tử
console.log(boxed.offsetHeight); // chiều cao của phần tử
console.log(boxed.offsetLeft); // vị trí của nó so với bên trái
console.log(boxed.offsetTop); // vị trí của nó so với phía trên
console.log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha

// 2. clientWidth, clientHeight, clientLeft, clientTop
console.log(boxed.clientWidth); // độ rộng của phần tử trừ đi border
console.log(boxed.clientHeight); // chiều cao của phần tử trừ đi border
console.log(boxed.clientLeft); //  vị trí của nó so với bên trái border
console.log(boxed.clientTop); //  vị trí của nó so với phía trên border

// 3. window.innerWidth, window.outerWidth, window.innerHeight, window.outerHeight
console.log(window.innerHeight);  // chiều cao window ko tính phần từ tab đổ lên 
console.log(window.outerHeight);  // chiều cao window full 
console.log(window.innerWidth);  // chiều rộng window ko tính phần Dev Tools 
console.log(window.outerWidth);  // chiều rộng window full 

// 4. elNode.getBoundingClientRect() -> lấy ra toạ độ, kích thước của phần tử
log(boxed.getBoundingClientRect());
// left, x: vị trí của khối so với bên trái
// top: vị trí của khối so với phía trên
// bottom: chiều cao của khối + top
// right: độ rộng của khối + left
// width: độ rộng
// height: chiều cao

