const detailsMainImg = document.querySelector(".detailsPageImg");
const body = document.querySelector("body");

detailsMainImg.addEventListener("click", () => {
  detailsMainImg.classList.toggle("enlarge");
});

// function enlargeImg() {
//   detailsMainImg.style.transform = "scale(1.5)";
//   detailsMainImg.style.transition = "transform 0.25s ease";
// }

// function imgReset() {
//   detailsMainImg.style.transform = "scale(1)";
//   detailsMainImg.style.transition = "transform 0.25s ease";
// }
// window.addEventListener("click", (event) => {
//   if (event.target == body) {
//     console.log(event.target);
//     detailsMainImg.style.transform = "scale(1)";
//     detailsMainImg.style.transition = "transform 0.25s ease";
//   } else {
//     return;
//   }
// });
