alert("505 error");
const yourName = prompt("Enter your name", ""); // enter field 
const isYourMoney = confirm("Is it your money?");   // choose true/false

// simple task below
// basic closure
function sayHello(message)  {
    return function yourName(name) {
        alert(`${message} ${name}`);
    }
}

const message = prompt("Enter message", "");
const yourName = prompt("Enter your name", "");

let hello = sayHello(message);  // return function(name)
hello(yourName);