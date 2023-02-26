import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const items = [];

galleryItems.forEach((element) => {
    
  const galleryLnk = document.createElement("a");
  galleryLnk.classList.add("gallery__link");
  galleryLnk.href = element.original;

  const galleryImage = document.createElement("img");

  galleryImage.classList.add("gallery__image");

  galleryImage.src = element.preview;

  galleryImage.setAttribute("title", element.description);

  galleryImage.alt = element.description;

  galleryLnk.append(galleryImage);
  items.push(galleryLnk);
});

gallery.append(...items);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
