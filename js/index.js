const sliderButtonsChangeColor = document.querySelectorAll(".sliderButtons");
const featuredContainer = document.querySelector(".featured-container");
const sliderContainer = document.querySelector(".slider-container");
const worldOfWondersURL =
  "https://nikosdigalakis.com/world-of-wonders/wp-json/wp/v2/posts?_embed";

// slider button color change on click
sliderButtonsChangeColor.forEach((target) => {
  target.addEventListener("click", () => {
    [...target.parentElement.children].forEach((x) =>
      x.classList.remove("black")
    );
    target.classList.add("black");
  });
});

// api call function for featured items
async function getPosts(url) {
  const respons = await fetch(url);
  const data = await respons.json();

  featuredContainer.innerHTML = ``;
  for (let i = 0; i <= data.length; i++) {
    if (data[i].categories[0] === 3) {
      const cardImg = data[i].better_featured_image.source_url;
      featuredContainer.innerHTML += `
      <a href="" title="Read about ${data[i].title.rendered}">
      <div class="card" style="background: url(${cardImg})no-repeat center">
        <div class="card-info">
          <h3 class="card-title">${data[i].title.rendered}</h3>
          <p class="card-description">
              ${data[i].excerpt.rendered}
          </p>
        </div>
      </div>
    </a>
      `;
    }
  }
}

getPosts(worldOfWondersURL);
