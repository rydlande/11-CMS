let username ="ck_4a47124e35322d91ec11fb6d6380d33f760fddf5"
let password ="cs_24f7e3ab48be017c85b3c2721c1bc824b7a42207"


const usedUrl ="https://cms.serialsnoozer.no/wp-json/wc/v3/products";


fetch(usedUrl, {
    method: 'GET',
    headers: new Headers({
        'Authorization': 'Basic ' + btoa(username + ":" + password)
    })
})
    .then(response => response.json())
    .then(data => {
        listData(data)
    })
    .catch(error => console.error(error));

console.log(usedUrl);


function listData(jacket) {
    jacket.filter(jackets => {
    
    const {name, price, featured } = jackets

console.log(name + price);
})
}


// const burger = document.querySelector('.burger');
// const menu = document.querySelector('.menu');
// const slideDown = document.querySelector('.slide-down');

// burger.addEventListener('click', () => {
// 	menu.classList.toggle('active');
// });

// window.addEventListener('resize', () => {
// 	if (window.innerWidth > 768) {
// 		menu.classList.remove('active');
// 	}
// });
