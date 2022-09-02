import { galleryItems } from "./gallery-items.js";
function createMarkup(images) {
  return images
    .map((image) => {
      return `
<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`;
    })
    .join(``);
}

const createdMarkup = createMarkup(galleryItems);
const galleryEl = document.querySelector(`.gallery`);
galleryEl.innerHTML = createdMarkup;
galleryEl.addEventListener(`click`, onElementClick);
function onElementClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //   console.log(event.target.dataset.source);

  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeByEscape);
      },

      onClose: (instance) => {
        window.removeEventListener("keydown", closeByEscape);
      },
    }
  );
  function closeByEscape(event) {
    if (event.keyCode === 27) {
      instance.close();
    }
  }
  instance.show();
}
