const images = [
{
	image: "img/01.webp",
	title: "Marvel's Spiderman Miles Morale",
	text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
},
{
	image: "img/02.webp",
	title: "Ratchet & Clank: Rift Apart",
	text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
},
{
	image: "img/03.webp",
	title: "Fortnite",
	text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
},
{
	image: "img/04.webp",
	title: "Stray",
	text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
},
{
	image: "img/05.webp",
	title: "Marvel's Avengers",
	text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
},
];



// Get the container elements from the HTML
const containerHighlighted = document.querySelector(".highlighted");
const containerThumb = document.querySelector(".thumb");



// Loop through the images array and add each image to the HTML
for (let i = 0; i < images.length; i++) {
	
	containerHighlighted.innerHTML += `<div class="img_container ${i == 0 ? "active" : ""}">
    <img src="${images[i].image}" alt="" class="${i == 0 ? "active" : ""}">
    <h2 class="title">${images[i].title}</h2>
    <p class="text">${images[i].text}</p>
    </div>`;

	containerThumb.innerHTML += `<img src="${images[i].image}" class="${
		i == 0 ? "active" : ""
	}"></img>`;
}



// Get the list of image containers and thumbnail images from the HTML
const listHighlighted = document.querySelectorAll(".highlighted .img_container");
const listThumb = document.querySelectorAll(".thumb img");
const backward = document.querySelector(".reverse");
let activeIndex = 0;



// Get the next button and add a click event listener
const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", function () {
    listHighlighted[activeIndex].classList.remove("active");
	listThumb[activeIndex].classList.remove("active");
	
	activeIndex++;
	
	// If the activeIndex is less than 0, set it to the first image in the list
	if (activeIndex < 0) {
		if (activeIndex >= listHighlighted.length) {
			activeIndex = 0;
		}
		
		listHighlighted[activeIndex].classList.add("active");
		listThumb[activeIndex].classList.add("active");
	}});
	
	

// Get the previus button and add a click event listener
const btnPrev = document.querySelector(".btn-prev");
btnPrev.addEventListener("click", function () {
	listHighlighted[activeIndex].classList.remove("active");
	listThumb[activeIndex].classList.remove("active");

	activeIndex--;

	// If the activeIndex is less than 0, set it to the last image in the list
	if (activeIndex < 0) {
		activeIndex = listHighlighted.length - 1;
	}

	listHighlighted[activeIndex].classList.add("active");
	listThumb[activeIndex].classList.add("active");
});



// Set interval to automatically switch the highlighted image every 3 seconds
let forward = setInterval(() => {
	listHighlighted[activeIndex].classList.remove("active");
	listThumb[activeIndex].classList.remove("active");

	activeIndex++;

	// If the activeIndex is less than 0, set it to the first image in the list
	if (activeIndex >= listHighlighted.length) {
		activeIndex = 0;
	}

	listHighlighted[activeIndex].classList.add("active");
	listThumb[activeIndex].classList.add("active");
}, 2000);



// Add event listener to the backward button to stop the forward interval and start a new one in reverse
backward.addEventListener("click", function () {
	clearInterval(forward);
	setInterval(() => {
		listHighlighted[activeIndex].classList.remove("active");
		listThumb[activeIndex].classList.remove("active");

		activeIndex--;

		// If the activeIndex is less than 0, set it to the last image in the list
		if (activeIndex < 0) {
			activeIndex = listHighlighted.length - 1;
		}

		listHighlighted[activeIndex].classList.add("active");
		listThumb[activeIndex].classList.add("active");
	}, 2000);
});



// Add event listeners to the thumbnail images to switch the highlighted image when clicked
for (let i = 0; i < listThumb.length; i++) {
	listThumb[i].addEventListener("click", function () {
		listHighlighted[activeIndex].classList.remove("active");
		listThumb[activeIndex].classList.remove("active");
		activeIndex = i;
		listHighlighted[activeIndex].classList.add("active");
		listThumb[activeIndex].classList.add("active");
	});
}
