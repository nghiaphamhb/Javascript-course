// 1. dao nguoc 1 chuoi 
function reverseString(str){
    if(!str) return null;
    return str.split(" ").reverse().join(" ");
}

// console.log(reverseString("My name is Nghia"));

// 2. dao nguoc 1 chuoi gom cac ki tu
function reverseWord(str){
    if(!str) return null;
    return str.split(" ")
    .map((el) => el.split("").reverse().join(""))
    .reverse()
    .join(" ");
}

// console.log(reverseWord("I love"));   // evol I


// 3. capitalize string
function capitalizeWord(word = ""){
    if(!word) return null;
    const firstChar = word.charAt(0).toUpperCase();
    const otherChar = word.slice(1).toLowerCase();
    return `${firstChar}${otherChar}`;
}

function capitalizeString(str){
    if(!str) return null;
    return str.split(" ").map(
        item => capitalizeWord(item)
    ).join(" ");
};


console.log(capitalizeString("heLlo world"));