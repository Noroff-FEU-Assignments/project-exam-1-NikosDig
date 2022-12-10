const sliderButtonsChangeColor = document.querySelectorAll(".sliderButtons");

sliderButtonsChangeColor.forEach((target) => {
  target.addEventListener("click", () => {
    [...target.parentElement.children].forEach((x) =>
      x.classList.remove("black")
    );
    target.classList.add("black");
  });
});
