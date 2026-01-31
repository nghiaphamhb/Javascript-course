{/* <a href="https://evondev.com" class="link" data-name="evondev">evondev</a> */}

const link = document.querySelector(".link");

link.addEventListener("click", function (event) {
  event.preventDefault();

  // selector.style.property = value
  // event.target.style.property = value
  console.log(event.target);
  console.log(event.target.style);
  event.target.style.color = "red";
  // background-color -> backgroundColor
  // position -> position

  // Lấy custom attribute data-abc
  // event.target.dataset.name
  const name = event.target.dataset.name;
  console.log(name);
});

