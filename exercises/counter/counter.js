const decButton = document.querySelector(".counter-descrease");
const incButton = document.querySelector(".counter-increase");
const number = document.querySelector(".counter-number");

let counter = Number(number.textContent);

function increase() {
    counter += 1;
    number.textContent = counter;
}

function decrease() {
    if(counter > 0) {
        counter -= 1;
        number.textContent = counter;
    }
}

decButton.addEventListener("click", decrease);
incButton.addEventListener("click", increase);