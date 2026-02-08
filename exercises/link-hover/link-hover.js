const list_link = [...document.querySelectorAll(".menu-link")];
list_link.forEach((link) => link.addEventListener("mouseenter", handleHover));

// line-effect
const line = document.createElement("div");
line.className = "line-effect";
document.body.appendChild(line);

function handleHover(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
}

const menu = document.querySelector(".menu");
menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
});