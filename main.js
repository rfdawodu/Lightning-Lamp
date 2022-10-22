const switchBtn = document.querySelector(".btn");
const light = document.getElementById("light");
// const check = document.querySelector(".check");
// const control =

// const red =
let isLight = true;

const lightOn = function () {
  if (isLight) {
    switchBtn.classList.toggle("active");
    light.classList.toggle("on");
  } else {
    switchBtn.classList.remove("active");
  }
};

switchBtn.addEventListener("click", lightOn);
