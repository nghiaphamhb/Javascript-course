// ==== In this file we have ====
// 1. selector.textContent = ""
// 2. selector.innerText = ""
// 3. selector.innerHTML = "<div> </div>"
// ==============================

// 1. textContent : hiển thị nội dung bên trong selector (Không quan tâm CSS)
const container = document.querySelector(".container");
// container.textContent = "New content"; // can change text content
console.log(container.textContent);

// 2. innerText : hiển thị nội dung bên trong selector (có lọc khoảng trắng và quan tâm CSS - display : none)
console.log(container.innerText);

// 3. innerHTML -> lấy ra/ Thay toàn bộ nội dung của selector bằng HTML mới
container.textContent = '<div>Change the world</div>';   // coi như text mà hiển thị 
container.innerHTML = '<div>Change the world</div>';  // html đúng

