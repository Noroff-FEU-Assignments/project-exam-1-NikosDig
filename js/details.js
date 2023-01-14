const activeBreadcrumb = document.querySelector(".activeBreadcrumb");
const blogSpesificSection = document.querySelector(".blogSpesificSection");
const mainPostContent = document.querySelector(".mainPostContent");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailUrl =
  "https://nikosdigalakis.com/world-of-wonders/wp-json/wp/v2/posts/" + id;
console.log(id);

async function getPostsDetails(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.title = `${data.title.rendered} || Wonders of the world blog`;
    activeBreadcrumb.innerHTML = data.title.rendered;
    blogSpesificSection.innerHTML = ``;
    blogSpesificSection.innerHTML = `
                                    <div class="hero" id="details-modified-hero">
                                    <img
                                      src="${data.better_featured_image.source_url}"
                                      alt="representation of the ancient acropolis"
                                    />
                                    </div>
                                    <h1 class="heading">${data.title.rendered}</h1>
                                    <div class="detailsImageContainer">
                                      <img
                                        src="${data.better_featured_image.source_url}"
                                        alt="${data.title.rendered}"
                                        class="detailsPageImg"
                                      />
                                    </div>
    `;
    mainPostContent.innerHTML = ``;
    mainPostContent.innerHTML = ` 
                                   <p class="shortDescription">${data.content.rendered} </p>
    `;
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
  } catch (error) {
    console.log(error);
  }
}

getPostsDetails(detailUrl);
