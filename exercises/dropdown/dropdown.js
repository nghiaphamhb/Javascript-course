const button = document.querySelector(".dropdown__select");
const showedText = document.querySelector(".dropdown__selected");
const icon = document.querySelector(".dropdown__caret");
const list = document.querySelector(".dropdown__list");
const items = document.querySelectorAll(".dropdown__item");

button.addEventListener("click", toogleDropdown);

[...items].forEach(el => addEventListener("click", function(e){
    if(e.target === el){
        changeShowedText(el.firstElementChild.textContent);
    }
}));

function toogleDropdown(){
    const isOpen = list.classList.toggle("show");
    icon.classList.toggle("fa-caret-up", isOpen);
    icon.classList.toggle("fa-caret-down", !isOpen);
}

function changeShowedText(newText) {
    showedText.textContent = newText;
    toogleDropdown();
}

