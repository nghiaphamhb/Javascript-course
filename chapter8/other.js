// ==== In this file we have ====
// 1. document.title 
// 2. document.head
// 3. convert HTML collection, NodeList to Array
// ==============================

// 1. document.title -> thẻ title của trang web
console.log(document.title); // Javascript
document.title = "Welcome to Javascript course";

// 2. document.head
console.log(document.head);
// <meta name="viewport" content="width=device-width, initial-scale=1.0" />
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(meta);

// 3. convert HTML collection, NodeList to Array
// then we can use it like using an array
const li = document.getElementsByTagName("li");

// first way:
// Array.from(HTML collection or NodeList); 
li.forEach((item) => item);

// second way: 
// [...HTMLCOLLECT], [...NodeList]
[...li].filter((item) => item);

