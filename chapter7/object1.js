// === Object basic ===
// có 2 cách khai báo 1 object, đó là literal và constructor:
const objectLiteral = {};
const objectConstructor = new Object();

// nếu đặt tên key có chứa ký tự đặc biệt thì cách sử dụng sẽ khác: 
const obj = {
    "last-name" : "Nghia"
};
console.log(obj["last-name"]);

// xóa giá trị trong object
delete obj["last-name"];

// === for in ===
for(let key in obj){
    console.log("Its value : " + obj[key]);
}