// Ex1: Viết 1 function kiểm tra value có phải là 1 object hay không? 
// Tip: mảng [] và null vô tình được JS coi là typeof = "object" -> sai 
function isObject(obj) {
    if(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) return true;
    return false;
}

// console.log(isObject({name : "nghia"}));

// Ex2: Viết 1 function trả về 1 nested array, các phần tử gồm key và value của nó
function nested(obj){
    if(isObject(obj)){
        // cách 1 
        // return Object.entries(obj);

        // cách 2
        return Object.keys(obj).map((k) => {
            return [k, obj[k]];
        });

    }
}

// console.log(nested({
//     name : "Nghia",
//     age : 18
// }));

// Ex3: Viết function without(obj, key1) -> trả lại new object trong đó không có key1
function without(obj, key) {
    if(typeof obj !== 'object') return {};
    const clone = JSON.parse(JSON.stringify(obj));
    delete clone[key];
    return clone;
} 

// console.log(without({
//     name : "Nghia",
//     a : 2
// }, 'a'));

// Ex4 : Kiểm tra xem 2 objects truyền vào có bằng nhau hay không 
function isEqual(obj1, obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) return false;
    return keys1.every((k) => obj1[k] === obj2[k]);
}

console.log("First example: " + isEqual({ a : 1, b : 2}, { a : 1, b : 2}));
console.log("Second example : " + isEqual({ a : 1}, { a : 1, b : 2}));