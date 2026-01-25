// ==== In this file we have ====
// 1. selector.getAttribute("attribute")
// 2. selector.setAttribute("attribute", value)
// 3. selector.removeAttribute("attribute")
// 4. selector.hasAttribute("attribute")
// ==============================

// 1. selector.getAttribute("attribute") -> lấy ra giá trị của attribute selector
// selector: 1 cái
// attribute -> thuộc tính: href, id, class, src, style
const link = document.querySelector(".link");
const href = link.getAttribute("href");
// đối với node list: 
const li = document.querySelectorAll(".item");
li.forEach(element => {
  console.log(element.getAttribute("class"));  
});


// 2. selector.setAttribute("attribute", value)
link.setAttribute("target", "_blank");

// 3. selector.removeAttribute("attribute")
const p = document.getElementById("spinner");
p.removeAttribute("id");

// 4. selector.hasAttribute("attribute")
console.log(p.hasAttribute("class"));
