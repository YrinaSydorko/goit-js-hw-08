import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryListUrl = document.querySelector('.gallery');
const newGalleryItems = galleryItems
  .map(
    image =>
      `<li class=gallery__item><a class=gallery__link href=${image.original}><img class=gallery__image src=${image.preview} alt='${image.description}'></img></a></li>`
  )
  .join('');

galleryListUrl.insertAdjacentHTML('afterbegin', newGalleryItems);

// ? // Створюю модалку за допомогою SimpleLightBox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});


