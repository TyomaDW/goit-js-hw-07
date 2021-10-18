import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const imgMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
	            <a class="gallery__link" href="${original}">
		            <img
			            class="gallery__image"
			            src="${preview}"
			            data-source="${original}"
			            alt="${description}"/>
	            </a>
            </div>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);
