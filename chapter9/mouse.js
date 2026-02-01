// ==== In this file we have ====
// 1. mousemove event
// 2. mouseover event
// 3. mouseenter event
// 4. mouseleave event
// 5. clientXY, pageXY
// ==============================

const button = document.querySelector(".button");

// 1. mousemove (bắn event liên tục mỗi khi con trỏ di chuyển trong diện tích của node element)
button.addEventListener("mousemove", function(){
    console.log("mousemove");
});

// 2. mouseover (chỉ bắn event một lần khi con trỏ đi vào diện tích của một phần tử (và có thể bắn lại khi đi vào các phần tử con))
button.addEventListener("mouseover", function(){
    console.log("mouseover");
});

// 3. mouseenter (gần giống mouseover: bắn event khi con trỏ đi vào phần tử, nhưng KHÔNG bubble: 
// KHÔNG bắn lại event khi con trỏ đi vào các phần tử con bên trong)
button.addEventListener("mouseenter", function(){
    console.log("mouseenter");
});

// 4. mouseleave (bắn event khi di chuột từ phần tử ra khỏi diện tích của nó)
button.addEventListener("mouseleave", function(){
    console.log("mouseleave");
});

// 5. clientXY, pageXY
// clientX / clientY: tọa độ chuột tính từ góc trên-trái của vùng nhìn (viewport), không tính phần trang đã scroll.
// pageX / pageY: tọa độ chuột tính từ góc trên-trái của toàn bộ trang (document), có tính scroll.
document.addEventListener("mousemove", function (event) {
  console.log(`pageY: ${event.pageY}`);
  console.log(`clienY: ${event.clientY}`);
});