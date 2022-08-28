// "use strict";
// import images from "./gallery-items.js";

import { galleryItems } from "./gallery-items.js";

// const refs = {
//   gallery: document.querySelector(".js-gallery"),
//   image: document.createElement("img"),
//   lightbox: document.querySelector(".lightbox"),
//   btn: document.querySelector('[data-action="close-lightbox"]'),
//   modal: document.querySelector(".lightbox__content"),
//   lightbox__image: document.querySelector(".lightbox__image"),
// };

// const createGalleryItem = ({ preview, original, description }) =>
//   `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href=${original}
//   >
//     <img
//       class="gallery__image"
//       src=${preview}
//       data-source=${original}
//       alt=${description}
//     />
//   </a>
//   </li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
// refs.image.classList.add("gallery__image");

// refs.gallery.addEventListener("click", onGalleryClick);
// refs.btn.addEventListener("click", onClickHandlerClose);
// refs.modal.addEventListener("click", closeLightbox);

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   if (e.target.nodeName === "IMG") {
//     refs.lightbox.classList.add("is-open");
//     refs.lightbox__image.src = e.target.getAttribute("data-source");
//     refs.lightbox__image.alt = e.target.alt;
//   }
//   window.addEventListener("keyup", clickKey);
// }

// function onClickHandlerClose(e) {
//   e.preventDefault();
//   refs.lightbox.classList.remove("is-open");
//   refs.lightbox__image.src = "";
//   refs.lightbox__image.alt = "";
//   window.removeEventListener("keyup", clickKey);
// }

// function closeLightbox(event) {
//   if (event.target === event.currentTarget) {
//     onClickHandlerClose();
//   }
// }

// function clickKey(event) {
//   if (event.code === "Escape") {
//     onClickHandlerClose();
//   }
// }

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
