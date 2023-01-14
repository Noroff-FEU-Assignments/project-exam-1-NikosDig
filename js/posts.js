const numberOfPostsHeading = document.querySelector(".numberOfPosts");
const postsContainer = document.querySelector(".posts-list-container");
const loadMoreButton = document.querySelector(".loadMore");
const worldOfWondersURL =
  "https://nikosdigalakis.com/world-of-wonders/wp-json/wp/v2/posts?_embed";
const perPage20 = `${worldOfWondersURL}&per_page=20`;

// API call to wp to show the 10 first posts and fixs the post number heading to the number of posts per page
async function getPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    postsContainer.innerHTML = ``;
    numberOfPostsHeading.innerHTML = ``;

    for (let i = 0; i <= data.length; i++) {
      const cardImg = data[i].better_featured_image.source_url;
      postsContainer.innerHTML += `
            <a href="details.html?id=${data[i].id}" title="Read about ${data[i].title.rendered}">
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
      numberOfPostsHeading.innerHTML = `${data.length} posts`;
      console.log(data.length);
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts(worldOfWondersURL);

// on click it adds the 20 per page parm on the url and updates the number of posts heading to show the total number of posts
loadMoreButton.addEventListener("click", () => {
  getPosts(perPage20);
});
