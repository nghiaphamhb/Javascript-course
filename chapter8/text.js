// 1. textContent : hiển thị nội dung bên trong selector (tính cả html)
const container = document.querySelector(".container");
// container.textContent = "New content"; // can change text content
console.log(container.textContent);

// 2. innerText : hiển thị nội dung bên trong selector (có lọc khoảng trắng và display : none)
console.log(container.innerText);

// 3. innerHTML -> lấy ra nội dung của selector bao gồm cả HTML 
container.textContent = '<div>Change the world</div>';   // coi như text mà hiển thị 
container.innerHTML = '<div>Change the world</div>';  // html đúng

