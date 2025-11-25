// By referrences -> nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];

const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);

console.log(arr1Str === arr2Str);