// ==== In this file we have ====
// 1. elNode.insertAdjacentText("position","text")
// 2. elNode.insertAdjacentElement("position", node)
// 3. elNode.insertAdjacentHTML("position", html)
// 4. parentNode.insertBefore(newNode, existingNode)
// 5. parentNode.replaceChild(newnode, oldnode);
// ==============================

// 1. selector.insertAdjacentText("position","text") -> thêm text theo vị trí 
// position: beforeBegin, afterBegin, beforeEnd, afterEnd
// -- beforeBegin --
// <h3>
//     -- afterBegin --
//     <span></span>
//     -- beforeEnd --
// </h3>
// -- afterEnd
const h3 = document.querySelector("h3");
h3.insertAdjacentText("beforebegin", "Im here");

// 2. insertAdjacentElement("position", node) -> thêm element theo vị trí 
const strong = document.createElement("strong");
strong.classList.add("bold");
h3.insertAdjacentElement("beforebegin", strong);

// 3. insertAdjacentHTML("position", html)
const template = `
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
`;
h3.insertAdjacentHTML("afterend", template);


// 4. parentNode.insertBefore(newnode, existingnode)
const ul = document.createElement("ul");
document.body.insertBefore(ul, h3);

// 5. parentNode.replaceChild(newnode, oldnode)
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.createElement("div"));
