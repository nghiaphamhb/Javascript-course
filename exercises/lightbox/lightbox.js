/**
 * <div class="lightbox">
      <div class="lightbox-content">
        <img src="" alt="">
        <i class="fa fa-next"></i>
      </div>
    </div>
 */

const imgList = document.querySelectorAll("img");

[...imgList].forEach(i => i.addEventListener("click", openBox));

function openBox(e) {
    const src = e.target.getAttribute("src");
    const template = `
    <div class="lightbox">
        <div class="lightbox-content">
            <i class="fa fa-angle-left lightbox-prev"></i>
            <img src="${src}" alt="" class="lightbox-image">
            <i class="fa fa-angle-right lightbox-next"></i>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML("afterBegin", template);
}

function getCurrentIndex() {
    const currentSrc = document.querySelector(".lightbox-image").getAttribute("src");
    const index = [...imgList].findIndex(el => el.getAttribute("src") === currentSrc);
    return index;
}

document.body.addEventListener("click", function(e){
    // console.log(e.target); // for dev

    if(e.target.matches(".lightbox")) {
        e.target.parentNode.removeChild(e.target);
    } else if(e.target.matches(".lightbox-prev")) {
        let index = getCurrentIndex();
        index -= 1;
        if(index < 0) index = imgList.length -1;
        changeSrc([...imgList][index].getAttribute("src"));
    } else if(e.target.matches(".lightbox-next")) {
        let index = getCurrentIndex();
        index += 1;
        if(index > imgList.length - 1) index = 0;
        changeSrc([...imgList][index].getAttribute("src"));
    }
})

function changeSrc(src){
    const lightImage = document.querySelector(".lightbox-image");
    // console.log(src);
    lightImage.setAttribute("src", src);
}