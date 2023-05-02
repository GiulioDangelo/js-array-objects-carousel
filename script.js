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


const containerHighlighted = document.querySelector(".highlighted")
const textImg = document.querySelector(".text")
const containerThumb = document.querySelector(".thumb");



for (let key of images) {
    containerHighlighted.innerHTML += `<img src="${key.image}"></img>`

    textImg.innerHTML += 
    `<h1>${key.title}</h1>
     <p>${key.text}</p>`

    containerThumb.innerHTML += `<img src="${key.image}"></img>`

}



const listHighlighted = document.querySelectorAll('.highlighted img');
const listText = document.querySelectorAll('.text');
const listThumb = document.querySelectorAll('.thumb img');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');



let activeIndex = 0

btnPrev.addEventListener('click', function () {

    listHighlighted[activeIndex].classList.remove('active');
    listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');

    activeIndex++

    if (activeIndex >= listHighlighted.length) {
        activeIndex = 0
    }

    listHighlighted[activeIndex].classList.add('active');
    listText[activeIndex].classList.add('active');
    listThumb[activeIndex].classList.add('active');
})



btnNext.addEventListener('click', function () {
    
    listHighlighted[activeIndex].classList.remove('active');
    listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');

    activeIndex--

    if (activeIndex < 0) {
        activeIndex = listHighlighted.length - 1
    }

    listHighlighted[activeIndex].classList.add('active');
    listText[activeIndex].classList.add('active');
	listThumb[activeIndex].classList.add('active');
})



for (let i = 0; i < listThumb.length; i++) {

listThumb[i].addEventListener('click', function () {

    listHighlighted[activeIndex].classList.remove('active');
    listText[activeIndex].classList.remove('active');
    listThumb[activeIndex].classList.remove('active');
    activeIndex = i;
    listHighlighted[activeIndex].classList.add('active');
    listText[activeIndex].classList.add('active');
    listThumb[activeIndex].classList.add('active');
})}