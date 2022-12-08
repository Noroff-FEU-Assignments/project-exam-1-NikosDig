const blackOrNot = document.querySelectorAll(".sliderButtons");

blackOrNot.forEach((target) => {
  target.addEventListener("click", () => {
    target.classList.remove("black");
    target.classList.add("black");
  });
});
