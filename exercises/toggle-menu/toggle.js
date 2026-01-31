const icon = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

icon.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.toggle("is-show");
    icon.classList.toggle("fa-times");
    icon.classList.toggle("fa-bars");
});

menu.addEventListener("click", function(e){
    e.stopPropagation();
});

document.addEventListener("click", function(){
    menu.classList.remove("is-show");
});