// 1. Sự khác nhau giữa Node List và HTML Collection
const li = document.getElementsByTagName("li"); // HTML Collection
const li2 = document.querySelectorAll("li"); // NodeList
log(li);
log(li2);
// Điểm giống: có thể truy cập bằng index, có độ dài(length), giống mảng nhưng ko hẳn là mảng tức là không sử dụng được những phương thức đã học như là pop, shift, push, map, filter
// HTML Collection: ko sử dụng được forEach/map 
// NodeList: Sử dụng được forEach/map 
for (let i = 0; i < li.length; i++) {
  log(li[i]);
}

// 2. Sự khác nhau giữa parentNode và parentElement
// parentElement có thể null
// document.documentElement -> lấy thẻ html
log(document.documentElement.parentElement); // null
log(document.documentElement.parentNode); // #document