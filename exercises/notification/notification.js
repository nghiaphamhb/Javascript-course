// viết 1 function tạo ra thông báo 

const template = `
<div class="noti">
      <img src="https://source.unsplash.com/random" alt="" class="noti-image" />
      <div class="noti-content">
        <h3 class="noti-title">Welcome to notification</h3>
        <p class="noti-desc">
          Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
          dolor sit amet consec
        </p>
      </div>
    </div>
`;

const body = document.body;

const timer = setInterval(() => {
    const noti = document.querySelector(".noti");
    if(noti) noti.parentNode.removeChild(noti);

    body.insertAdjacentHTML("afterBegin", template);
}, 3000);