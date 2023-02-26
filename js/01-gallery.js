import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {

  // створення div
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  // створення "a"
  const galleryLnk = document.createElement("a");
  galleryLnk.classList.add("gallery__link");
  galleryLnk.href = element.original;

  // створення img
  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = element.preview;

  // додавання "data-source", "alt"
  galleryImg.setAttribute("data-source", element.original);
  galleryImg.alt = element.description;
  galleryItem.append(galleryLnk);
  galleryLnk.append(galleryImg);
  items.push(galleryItem);
});

gallery.append(...items);

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const imgSelected = e.target.getAttribute("data-source");
  const template = basicLightbox.create(
    `
    <img src="${imgSelected}" width="800" height="600">
    `,

    {
      onShow: () => {
        document.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  template.show();
  
  function closeModal(e) {
    if (e.key === "Escape") {
      template.close();
    }
  }
});
