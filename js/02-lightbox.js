import { galleryItems } from "./gallery-items.js";
function createMarkup(images) {
  return images
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href=${original}>
<img class="gallery__image" src=${preview} alt="${description}" />
</a></li>`,
  )
  .join('');
}
const createdMarkup = createMarkup(galleryItems);
const galleryElement = document.querySelector(`.gallery`);
galleryElement.innerHTML = createdMarkup;

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});
