const detailsMainImg = document.querySelector(".detailsPageImg");

// make the image biger on click by the user
detailsMainImg.addEventListener("click", () => {
  detailsMainImg.classList.toggle("enlarge");
});
// make the image smaller if the user clicks outside of the image
window.onclick = function (e) {
  if (e.target != detailsMainImg) {
    detailsMainImg.classList.remove("enlarge");
  }
};
