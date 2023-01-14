const activeBreadcrumb = document.querySelector(".activeBreadcrumb");
const blogSpesificSection = document.querySelector(".blogSpesificSection");
const mainPostContent = document.querySelector(".mainPostContent");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const detailUrl =
  "https://nikosdigalakis.com/world-of-wonders/wp-json/wp/v2/posts/" + id;
console.log(id);
const worldOfWondersURL =
  "https://nikosdigalakis.com/world-of-wonders/wp-json/wp/v2/posts?_embed";
const similarPostsContainer = document.querySelector(".similarPostsContainer");

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

async function getPosts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(similarPostsContainer);

    similarPostsContainer.innerHTML = ``;

    let shorted = data.sort(() => Math.random() - Math.random()).slice(0, 3);
    console.log(shorted);

    for (let i = 0; i <= shorted.length; i++) {
      const cardImg = shorted[i].better_featured_image.source_url;
      similarPostsContainer.innerHTML += `
      <a href="details.html?id=${shorted[i].id}" title="Read about ${shorted[i].title.rendered}">
      <div class="card" style="background: url(${cardImg})no-repeat center">
        <div class="card-info">
          <h3 class="card-title">${shorted[i].title.rendered}</h3>
          <p class="card-description">
              ${data[i].excerpt.rendered}
          </p>
        </div>
      </div>
    </a>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts(worldOfWondersURL);

// const cardImg = data[i].better_featured_image.source_url;
// similarPostsContainer.innerHTML += `
//       <a href="details.html?id=${data[i].id}" title="Read about ${data[i].title.rendered}">
//       <div class="card" style="background: url(${cardImg})no-repeat center">
//         <div class="card-info">
//           <h3 class="card-title">${data[i].title.rendered}</h3>
//           <p class="card-description">
//               ${data[i].excerpt.rendered}
//           </p>
//         </div>
//       </div>
//     </a>
//       `;
