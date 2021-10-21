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

let instance = basicLightbox;

const onModalOpen = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();
};

const onModalClose = event => {
  if (event.key === 'Escape' && instance.visible()) {
    instance.close();
  }
};

document.addEventListener('keydown', onModalClose);
galleryRef.addEventListener('click', onModalOpen);
