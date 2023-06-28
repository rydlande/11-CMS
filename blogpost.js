let fetchedData;
const loader = document.getElementById("loading");
function displayLoader() {
  loader.style.display = "block";
}
function hideLoader() {
  loader.style.display = "none";
}

const container = document.getElementById("container")
const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');

const url = `https://cms.serialsnoozer.no/wp-json/wp/v2/posts/${id}`;

displayLoader();

fetch(url)
    .then(res => res.json())
    .then(data => {
        fetchedData = data;
        displayPost(data);
        hideLoader();
});

function displayPost(data) {
  console.log(data);
  let content = `
  <div class="card">
    <img
      src=""
      alt="featured image of ${data.title.rendered}"
      class="image"
    />
    <h2>${data.title.rendered}</h2>
    <p>${data.content.rendered}</p>
  </div>`;
  container.innerHTML = content;
  document.title = `${data.title.rendered} | Fed Up`;
  getImageURL(data.featured_media);
}

function getImageURL(id) {
  fetch(`https://cms.serialsnoozer.no/wp-json/wp/v2/media/${id}`)
    .then(res => res.json())
    .then(data => {
      addImage(data.source_url);
    });
}

function addImage(src) {
  const image = document.querySelector(".image");
  image.src = src;
}