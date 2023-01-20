import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryImages(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryItemClick);

galleryContainer.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    newEl.close();
  }
});

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const imgUrl = event.target.dataset.source;

  const newEl = basicLightbox.create(`<img src="${imgUrl}"/>`);

  newEl.show();
}

function createGalleryImages(galleryItems) {
  const galleryEl = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  return galleryEl;
}
