// ==== In this file we have ====
// 1. document.addEventListener("DOMContentLoaded")
// 2. window.addEventListener("load")
// ==============================

// 1. document.addEventListener("DOMContentLoaded")  -> html DOM đã load xong 
document.addEventListener("DOMContentLoaded", function(){
    console.log("HTML dom loaded");
});

// 2. window.addEventListener("load") -> browser đang load
// thường ngta viết logic js trong function của event load này (sau khi load xong toàn bộ resource thì mới chạy logic)
window.addEventListener("load", function(){
    console.log("Web fully loaded");
    // logic js
});