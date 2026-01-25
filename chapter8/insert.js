// ==== In this file we have ====
// 1. selector.insertAdjacentText("position","text")
// ...
// ==============================

// 1. selector.insertAdjacentText("position","text") -> thêm text theo vị trí 
// position: beforebegin, afterbegin, beforend, afterend
// -- beforebegin --
// <h3>
//     -- afterbegin --
//     <span></span>
//     -- beforeend --
// </h3>
// -- afterend
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "Im here");
