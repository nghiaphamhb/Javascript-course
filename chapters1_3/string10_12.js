const str = "Hello my friends";

console.log(str.length);
console.log(str.split(" ")); // "Hello", "my", "friends"
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.startsWith("Hello"));
console.log(str.endsWith("friends"));
console.log(str.includes("my"));

console.log(str.replace("my", "our")); // "Hello our friends"
console.log(str.repeat(3));   // "Hello my friendsHello my friendsHello my friends"
console.log(str.slice(0, 3));  // "He" ; Quy tac: end - start - 1 = 2 ky tu 
console.log(str.slice(0));    // "Hello"
console.log(str.trim()); 
console.log(str.charAt(0));   // 'H' 

// substring 
substr(start_index, length), substring(start_index, end_index)

// String(value) -> string
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(false)); // "false"
console.log(String(true)); // "true"