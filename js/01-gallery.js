// 1. Imports galleryItems from gallery-items.js file.

import { galleryItems } from './gallery-items.js';
// Change code below this line
// 2. Take access to teg <div class="gallery"> with the querySelector.

const imagesGallery = document.querySelector('.gallery');

// 3. then creates a markupImagesGallery const by mapping through the items 
// in the galleryItems array and inserting the relevant data into the markup. 
// This markup is then inserted into the HTML page with the 
// insertAdjacentHTML method.
 
const markupImagesGallery = galleryItems.map(item => `<a class="gallery__link" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
</a>`).join("");

imagesGallery.insertAdjacentHTML("afterbegin", markupImagesGallery);

// 4. Adds onclick event listener to the imagesGallery div. 
// When an image is clicked, a basicLightbox modal is created with the 
// relevant image and is then shown.

let modal;
imagesGallery.onclick = event => {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const link = event.target.dataset.source;
	const html = `<img src="${link}" alt="" />`;

	modal = basicLightbox.create(html, {
		onShow: modal => {
			document.addEventListener("keydown", pushEscape);
		},
		onClose: modal => {
			document.removeEventListener("keydown", pushEscape);
		},
	});

	modal.show();
};

// 5. The pushEscape function is then used to close the modal 
// when the escape key is pressed. 

function pushEscape(event) {
	const EscKeyCode = "Escape";
	if (event.code === EscKeyCode) {
		modal.close();
	}
}

// Допоміжна дія за умовами завдання.
console.log(galleryItems);

