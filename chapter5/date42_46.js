// 42 : 4 cách khởi tạo date cơ bản 
const time = new Date();  // date time 
const time = new Date(timestamp);
const time = new Date("Thu May 13 2021");
const time = new Date(2021, 5, 1, 23, 23, 23, 23);  // năm - tháng - ngày - giờ - phút - giây - ms 

// 43: Hàm get trong date
cosnt birthday = new Date(2003, 11, 16);  // tháng có index từ 0 đến 11 

console.log(birthday.getFullYear() );
console.log(birthday.getMonth() );
console.log(birthday.getDate() );
console.log("Day in week" + birthday.getDay() );

console.log(birthday.getHours() );
console.log(birthday.getMinutes() );
console.log(birthday.getSeconds() );
console.log(birthday.getMiliseconds() );

console.log(birthday.getTime() );  //timestampt

// 44: Hàm set trong date
cosnt birthday = new Date(2003, 11, 16);  // tháng có index từ 0 đến 11 

birthday.setFullYear(2002);
birthday.setMonth(10);
birthday.setDate(11);
// ko co ham setDay
birthday.setHours(13);
birthday.setMinutes(00);
birthday.setSeconds(10);
birthday.setMiliseconds(14;

birthday.setTime(00);

// 46: Các hàm khác 
const now = new Date();
console.log(now.toDateString() );  // Fri May 14 2022
console.log(now.toTimeString() );  //00:22:00 GMT +0700

console.log(now.toLocaleDateString() );  // m/dd/yyyy -> 6/15/2022
console.log(now.toLocaleDateString("vi-VI") );  // -> 15/6/2022 
console.log(now.toISOString() );