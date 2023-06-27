const loader = document.getElementById("loading");
function displayLoader() {
    loader.style.display = 'block';
}
function hideLoader() {
    loader.style.display = 'none';
}

const url = "https://cms.serialsnoozer.no/wp-json/wp/v2/posts/?_embed=wp:featuredmedia"
const container = document.getElementById("container")

displayLoader();

fetch(url)
    .then(res => res.json())
    .then((data) => {
        hideLoader();
        renderPosts(data);
    });

function renderPosts(posts) {
    for (let post of posts) {
        if (post.featured_media > 0) {
        const img = post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
        const d = new Date(post.date).toLocaleDateString('en-EU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });
        
        container.innerHTML += `
        <div class="card">
          <a href="./blogpost.html?id=${post.id}" class="a_card">
            <img
              src="${img}"
              alt="featured image of ${post.title.rendered}"
              class="image"
            />
            <h2 class="title">${post.title.rendered}</h2>
            <p class="date">Published: ${d}</p>
          </a>
        </div>`;
        } else {
        output.innerHTML += `<div>[Post id=${post.title.rendered} does not have an image]</div>`;
        }
    }}