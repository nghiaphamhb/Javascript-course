const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

function handleClick(e) {
    [...tabItems].forEach((item) => {
        item.classList.remove("active");
    });
    [...tabContents].forEach((c) => {
        c.classList.remove("active");
    });

    e.target.classList.add("active");
    
    [...tabContents].forEach((content) => {
        if(content.dataset.tab === e.target.dataset.tab) content.classList.add("active");
    });
}

[...tabItems].forEach((item) => {
    item.addEventListener("click", handleClick);
});