import { galleryItems } from "./gallery-items.js";
function createMarkup(images) {
  return images
    .map((image) => {
      return `
<a class="gallery__item href="${image.original}">
    <img
    class="gallery__image"
    src="${image.preview}"
    alt="${image.description}"
    />
</a>
`;
    })
    .join(``);
}
const createdMarkup = createMarkup(galleryItems);
const galleryElement = document.querySelector(`.gallery`);
galleryElement.innerHTML = createdMarkup;

new SimpleLightbox(".gallery ", {
  captionsData: "alt",
  captionDelay: 250,
  animationSpeed: 250,
});
