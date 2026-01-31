const template = `
<div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
      </div>
    </div>
`;

const button = document.querySelector(".button");
button.addEventListener("click", function(){
    document.body.insertAdjacentHTML("afterBegin", template);
});

document.body.addEventListener("click", function(e){
    // console.log(e.target);
    const current = e.target;
    if(current.matches(".modal")) {
        current.parentNode.removeChild(current);
    } else if (current.matches(".fa")) {
        const modal = current.parentNode.parentNode;
        modal.parentNode.removeChild(modal);
    }
});