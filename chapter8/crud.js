// ==== In this file we have ====
// 1. document.createElement("") -> return elNode
// 2. elNode.appendChild(childNode)
// 3. document.createTextNode("text") -> return textNode
// 4. cloneNode(boolean) -> return elNode
// 5. hasChildNodes() -> return Boolean
// ==============================

// thêm xóa sửa trong JS
// 1. Tạo element trong JS
const div = document.createElement("div");

// 2. Thêm element vào document: selector.appendChild()
document.body.appendChild(div);

// 2+. Bài tập thêm DOM element vào document bằng JS
const card = document.createElement("div");
card.classList.add("card");

const cardImage = document.createElement("img");
cardImage.setAttribute("src", "random-link");
cardImage.setAttribute("class", "card-image");

card.appendChild(cardImage);
document.body.appendChild(card);


// 3. document.createTextNode -> tạo ra element chứa text 
const text = document.createTextNode("Hello my name is Nghia");
const h1 = document.createElement("h1");
h1.appendChild(text);
document.body.appendChild(h1);

// 4. cloneNode(boolean) -> true : deep clone element
const h1Clone = h1.cloneNode(true);
document.body.appendChild(h1Clone);

// 5. element.haschildNodes -> kiểm tra xem element có phần tử con hay không 
console.log(h1.hasChildNodes());
