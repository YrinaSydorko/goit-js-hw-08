




import { galleryItems } from "./gallery-items.js";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListUrl = document.querySelector('.gallery');
// *

// ? // Створюю масив з li>a>img> методом map та додаю розмітку в html

const newGalleryItems = galleryItems
  .map(
    image =>
      `<li class=gallery__item><a class=gallery__link href=${image.original}><img class=gallery__image src=${image.preview} alt='${image.description}'></img></a></li>`
  )
  .join('');

galleryListUrl.insertAdjacentHTML('afterbegin', newGalleryItems);

// ? // Створюю модалку за допомогою SimpleLightBox

new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.6,
  captionsData: 'alt',
  captionDelay: 250,
});
//import { galleryItems } from './gallery-items';
// Change code below this line
//const galleryList = document.querySelector(".gallery");
//const createGalleryItem = ({ preview, original, description }) => `
  //<li class="gallery__item">
    //<a class="gallery__link" href="${original}" data-original-img=${original}>
      //<img class="gallery__image" src="${preview}" alt="${description}" />
    //</a>
 // </li>
////`;

//galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");
//const lightbox = new SimpleLightbox(".gallery a", {
  //captions: true,
  //captionDelay: 250,
//});
//galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  //lightbox.open();
//});
//console.log(galleryItems);




//
