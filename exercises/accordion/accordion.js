const headers = document.querySelectorAll(".accordion-header");
const icons = document.querySelectorAll(".icon");

[...headers].forEach((el) => {
    el.addEventListener("click", handleClick);
});

function handleClick(e) {
    e.target.nextElementSibling.classList.toggle("is-active");
    console.log(e.target.lastElementChild);
    e.target.lastElementChild.classList.toggle("fa-angle-down");
    e.target.lastElementChild.classList.toggle("fa-angle-up");
}