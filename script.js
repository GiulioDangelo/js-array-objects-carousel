const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeIndex = 0

setInterval(() => {
    listHighlighted[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');

    activeIndex++

    if (activeIndex >= listHighlighted.length) {
        activeIndex = 0
    }

    listHighlighted[activeIndex].classList.add('active');
    listThumb[activeIndex].classList.add('active');
}, 1000);

const containerHighlighted = document.querySelector(".highlighted")
// const textImg = document.querySelector(".text")
const containerThumb = document.querySelector(".thumb");


for (let i = 0; i < images.length; i++) {
    containerHighlighted.innerHTML += `<img src="${images[i].image}" class="${i == 0 ? "active" : ''}"></img>`

    // textImg.innerHTML += 
    // `<h1 class="${i == 0 ? "active" : ''}">${images[i].title}</h1>
    //  <p class="${i == 0 ? "active" : ''}">${images[i].text}</p>`

    containerThumb.innerHTML += `<img src="${images[i].image}" class="${i == 0 ? "active" : ''}"></img>`

}


const listHighlighted = document.querySelectorAll('.highlighted img');
// const listTextH1 = document.querySelectorAll('.text');
const listThumb = document.querySelectorAll('.thumb img');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');



btnPrev.addEventListener('click', function () {

    listHighlighted[activeIndex].classList.remove('active');
    // listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');

    activeIndex++

    if (activeIndex >= listHighlighted.length) {
        activeIndex = 0
    }

    listHighlighted[activeIndex].classList.add('active');
    // listText[activeIndex].classList.add('active');
    listThumb[activeIndex].classList.add('active');
})



btnNext.addEventListener('click', function () {
    
    listHighlighted[activeIndex].classList.remove('active');
    // listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');

    activeIndex--

    if (activeIndex < 0) {
        activeIndex = listHighlighted.length - 1
    }

    listHighlighted[activeIndex].classList.add('active');
    // listText[activeIndex].classList.add('active');
	listThumb[activeIndex].classList.add('active');
})



for (let i = 0; i < listThumb.length; i++) {

listThumb[i].addEventListener('click', function () {

    listHighlighted[activeIndex].classList.remove('active');
    // listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');
    activeIndex = i;
    listHighlighted[activeIndex].classList.add('active');
    // listText[activeIndex].classList.add('active');
    listThumb[activeIndex].classList.add('active');
})}