{/* <div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close">X</i>
        <div class="modal-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odit nihil incidunt, veniam magni id maxime repellendus aperiam minima itaque quod, recusandae ipsum consectetur quam autem at sit voluptas illo?
        </div>
        <div class="modal-action">
          <button class="modal-submit">Confirm</button>
          <button class="modal-cancel">Cancel</button>
        </div>
      </div>
    </div> */}

const modal = document.createElement("div");
modal.classList.add("modal");

const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);

const i = document.createElement("i");
i.setAttribute("class","fa fa-times modal-close");
i.textContent = "X";
modalContent.appendChild(i);

const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odit nihil incidunt, veniam magni id maxime repellendus aperiam minima itaque quod, recusandae ipsum consectetur quam autem at sit voluptas illo?";
modalContent.appendChild(modalDesc);

const modalAct = document.createElement("div");
modalAct.classList.add("modal-action");
const modalSubmit = document.createElement("button");
modalSubmit.classList.add("modal-submit");
modalSubmit.textContent = "Confirm";
modalAct.appendChild(modalSubmit);
const modalCancel = document.createElement("button");
modalCancel.classList.add("modal-cancel");
modalCancel.textContent = "Cancel";
modalAct.appendChild(modalCancel);
modalContent.appendChild(modalAct);

const body = document.body;
body.insertAdjacentElement("afterBegin",modal);

setTimeout(()=> {
    modal.classList.add("is-show");
}, 5000);