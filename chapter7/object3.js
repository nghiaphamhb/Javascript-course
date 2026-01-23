// simple object
const student = {
    name : "Nghia",
    age : 23,
    sex : "Male",
    status : "Poor",
};

// Đối với object ko phải nested, ta có 2 cách đơn giản nhất để clone:
const clone1 = {...student};
const clone2 = Object.assign({}, student);


// nested object
const advStudent = {
    name : "Nghia",
    age : 23,
    sex : "Male",
    status : "Poor",
    school : {
        nameSchool : "ITMO"
    }
};

// Đối với object nested, để ko bị dính reference của keys con (key của object's key) của object cũ phải làm như sau:

const jsonObject = JSON.stringify(advStudent);  // object -> json string
const cloneNested = JSON.parse(jsonObject);
// viết gọn lại: const cloneNested = JSON.parse(JSON.stringify(advStudent));