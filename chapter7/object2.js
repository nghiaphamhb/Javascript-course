const student = {
    name : "Nghia",
    age : 23,
    sex : "Male",
    status : "Poor",
};

// Object.keys() trả về mảng keys của 1 object
const arrayKeys = Object.keys(student);
console.log(arrayKeys);

// Object.values() trả về mảng values của 1 object
const arrayValues = Object.values(student);
console.log(arrayValues);

// Object.entries() trả về mảng nested của 1 object (các mảng con chứa các cặp key và value)
const entries = Object.entries(student);
// entries = [
// ["name", "Nghia"], ["age" , 23] , ...
//]

// Object.assign(a, b) -> gộp nhiều objects lại với nhau 
const score = {
    value : 10,
};
const newObject = Object.assign(student, score);
// hoặc bằng cách: const newObject = {...student, ...score}

// Object.freeze() -> ngăn ko chỉnh sửa object 
const freezedStudent = Object.freeze(student);
freezedStudent.name = "Hieu";
console.log(freezedStudent.name); // its also "Nghia"

// Object.seal() -> cho phép chỉnh sửa object nhưng ko cho phép thêm (key : value) mới  
const sealedStudent = Object.seal(student);
sealedStudent.name = "Hieu";  // OK
sealedStudent.lastName = "A";  // ko thực thi
console.log(sealedStudent); // ko có lastName = "A"