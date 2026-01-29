// ==== In this file we have ====
// 1. elNode = document.querySelector("selector");
// 2. elNode = document.querySelectorAll("selector");
// 3. elNode = document.getElementsByClassName("className");
// 4. elNode = document.getElementsByTagName("tagName"); 
// ==============================

// querySelector trả về DOM's node
const node1 = document.querySelector("h1");
const node2 = document.querySelector(".container");
const node3 = document.querySelector("#spinner");

// querySelectorAll trả về 1 node list có thể loop được (nhưng nó kp là mảng nên ko sử dụng đc phương thức của mảng)
const list = document.querySelectorAll(".item");

const list2 = document.getElementsByClassName("item");

const h1 = document.getElementsByTagName("h1"); // tag là các thẻ như header, body, h1, h2, ..., footer 