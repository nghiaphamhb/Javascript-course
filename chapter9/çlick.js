// ==== In this file we have ====
// 1. elNode.addEventListenter("event name", function)
// 2. bubbling (2 cases) && prevent bubbling: e.stopPropagation() / e.stopImmediatePropagation()
// 3. capturing
// 4. target && currentTarget
// 5. e.preventDefault()
// ==============================

// 1. addEventListenter
const button = document.querySelector(".button");
button.addEventListener("click", function (){
    console.log("Click button");
});
or: 
function handleClick() {
    console.log("Click button");
}
button.addEventListener("click", handleClick);

// 2. bubbling: 
// + phần tử con kích hoạt sự kiện sẽ kéo theo kích hoạt sự kiện của phần tử cha 
const button = document.querySelector(".button");
button.addEventListener("click", function (){
    console.log("Click button");
});

const span = document.querySelector(".button span");
span.addEventListener("click", function (e){
    e.stopPropagation(); // prevent bubbling
    console.log("Click span");
});

// + phần tử con kích hoạt nhiều hàm xử lý sự kiện cùng lúc
// hàm xử lý chính sẽ dùng e.stopImmediatePropagation() và được đặt lên trên cùng -> vô hiệu hóa các hàm xử lý còn lại
const span = document.querySelector(".button span");
span.addEventListener("click", function (e){
    e.stopImmediatePropagation(); // prevent bubbling
    console.log("Click span");
});

span.addEventListener("click", function (){
    console.log("Click span 2");
});

// 3. capturing: nếu bật capturing thì thứ tự kích hoạt event sẽ từ cha đến con (ngược lại với default)
const body = document.body;
body.addEventListener("click", function () {
    console.log("Click body");
}
, { capture: true}
);

const button = document.querySelector(".button");
button.addEventListener("click", function (){
    console.log("Click button");
}
, { capture: true}
);

const span = document.querySelector(".button span");
span.addEventListener("click", function (){
    console.log("Click span");
}
, { capture: true}
);

// 4. target && currentTarget -> return node element
// target: nơi event bắt đầu (nơi mà ta click vào)
// currentTarget: nơi event handler bắt đầu xử lý
const button = document.querySelector(".button");
button.addEventListener("click", function(e) {
    console.log(e.target);  // <span></span>
    console.log(e.currentTarget); // <button></button>
});

// 5. event.preventDefault()
const link = document.querySelector(".link");
link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Event handler");
});