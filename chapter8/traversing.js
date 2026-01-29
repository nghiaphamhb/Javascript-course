// ==== In this file we have ====
// 1. parentNode, parentElement
// 2. parentNode.removeChild(), remove() -> áp dụng để xóa 1 DOM node 
// 3. insertAdjacentHtml("position", html)
// 4. childNodes, children -> các nodes bên trong
// 5. firstChild, firstElementChild
// 6. lastChild, firstElementChild
// ==============================

// 1. parentNode, parentElement
const span = document.querySelector("span");
console.log(span.parentNode); // or span.parentElement
console.log(span.parentNode.parentNode);

// 2. removeChild(), remove()
span.parentNode.removeChild(span);
span.remove();

// 3. nextElementSibling, previousElementSibling -> phần tử sau và trước
const nextSpan = span.nextElementSibling;
const prevSpan = span.previousElementSibling;

// 4. childNodes -> các nodes bên trong (mảng node)
// children -> các nodes bên trong (ko bao gồm textNode - các khoảng trắng giữa các thẻ được gọi là text node)
console.log(span.childNodes); // [text,<strong>,text]
console.log(span.children); //  [<strong>]

// 5. firstChild (includes textNode) & firstElementChild (no include textNode)
console.log(span.firstChild); // text
console.log(span.firstElementChild); //  <strong>

// 6. lastChild (includes textNode) & firstElementChild (no include textNode) 

